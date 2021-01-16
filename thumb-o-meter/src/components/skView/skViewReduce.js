import React, { useState, useEffect, useReducer } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import StartSession from "../massAlert/startSession";
import { VscDebugStart } from "react-icons/vsc";
import {
  Button,
  Icon,
  Input,
  Select,
  Switch,
  Collapse,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { MdUpdate, MdStop, MdPeople } from "react-icons/md";
import Thumb from "../thumb";
import Timer from "../timer/index";

const initialState = {
  question: "Set Custom Question",
  timer: "Custom",
  myColor: "#7f56f2",
  custom: false,
  customTime: false,
  throwaway: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "custom":
      return {
        ...state,
        custom: true,
      };
    case "customTime":
      return {
        ...state,
        customTime: true,
      };
    case "myColor":
      return {
        ...state,
        myColor: action.value,
      };
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "throwaway":
      return {
        ...state,
        throwaway: !state.throwaway,
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        error: "incorrect username or password",
        username: "",
        password: "",
      };
    default:
      throw new Error();
  }
}

function ReducerSkView({
  data,
  startSession,
  endSession,
  count,
  time,
  setTime,
}) {
  //   const [question, setQuestion] = useState("Set Custom Question");
  //   const [timer, setTimer] = useState("Custom");
  //   const [myColor, setMyColor] = useState("#7f56f2");
  //   const [custom, setCustom] = useState(false);
  //   const [customTime, setCustomTime] = useState(false);
  //   const [throwaway, setThrowaway] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const [state, dispatch] = useReducer(reducer, initialState);

  const { question, timer, myColor, custom, customTime, throwaway } = state;
  console.log({ question });
  function handleSession(e) {
    if (e.target.value !== "custom") {
      dispatch({
        type: "field",
        field: "question",
        value: e.target.value,
      });

      console.log({ question });
    }
    if (e.target.value === "custom") {
      dispatch({ type: "custom" });
    }
    //else {
    //   let customQ = prompt("whats your question?");
    //   setQuestion(customQ);
    //   console.log({ question });
    // }
  }

  function handleTimer(e) {
    if (e.target.value !== "customTime") {
      dispatch({
        type: "field",
        field: "timer",
        value: e.target.value,
      });
    }
    if (e.target.value === "custom") {
      dispatch({ type: "customTime" });
    }
    // } else {
    //   let customT = prompt("How many seconds should be allowed?");
    //   setTimer(Number(customT));
    //   setTime(Number(customT));
    //   console.log({ timer });
    // }
    onToggle();
  }
  useEffect(() => {
    if (data.outcome === 0) {
      dispatch({
        type: "myColor",
        value: "#7f56f2",
      });
    } else if (data.outcome <= 33) {
      dispatch({
        type: "myColor",
        value: "red",
      });
    } else if (data.outcome > 33 && data.outcome <= 66) {
      dispatch({
        type: "myColor",
        value: "#f58142",
      });
    } else if (data.outcome > 66 && data.outcome <= 100) {
      dispatch({
        type: "myColor",
        value: "green",
      });
    }
  }, [data.outcome]);

  return (
    <div
      className={style.container}
      style={{ backgroundColor: "#2C276B", color: "white" }}
    >
      <p className={style.throwaway}>
        Throwaway
        <Tooltip
          label="If selected this will be a throwaway option"
          fontSize="md"
        >
          <span>
            <Switch
              isDisabled={count > 0 ? true : false}
              onChange={() => dispatch({ type: "throwaway" })}
              colorScheme="green"
              // style={{ backgroundColor: myColor }}
            />
          </span>
        </Tooltip>
        <StartSession
          className={style.button}
          message="Thumb session starting"
          icon={<VscDebugStart />}
        />
      </p>
      {/* <h1>The Question Here</h1> */}
      <Select
        placeholder="Select Question"
        onChange={handleSession}
        isDisabled={count > 0 ? true : false}
        className={style.select}
      >
        <option value="How are you feeling?">How are you feeling?</option>
        <option value="Did you understand that?">
          Did you understand that?
        </option>
        <option value="Are you comfortable with moving on?">
          Are you comfortable with moving on?
        </option>
        {/* custom question */}
        <option value="custom">Set a custom question.</option>
      </Select>
      <Input
        focusBorderColor="lime"
        className={style.borderColor}
        style={
          custom
            ? {
                display: "block",
                textAlign: "center",
                borderColor: "grey",
              }
            : { display: "none" }
        }
        placeholder="set custom question..."
        type="text"
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "question",
            value: e.target.value,
          })
        }
      />
      <Select
        placeholder="Timer Amount"
        className={style.select}
        onChange={handleTimer}
        isDisabled={count > 0 ? true : false}
      >
        <option value="10">10 Seconds</option>
        <option value="15">15 Seconds</option>
        <option value="20">20 Seconds</option>
        <option value="25">25 Seconds</option>
        <option value="30">30 Seconds</option>
        <option value="custom">Set a custom time.</option>
      </Select>
      <Input
        focusBorderColor="lime"
        className={style.borderColor}
        style={
          customTime
            ? {
                display: "block",
                textAlign: "center",
                borderColor: "grey",
              }
            : { display: "none" }
        }
        placeholder="set custom time..."
        type="Number"
        onChange={(e) =>
          dispatch({
            type: "field",
            field: "timer",
            value: e.target.value,
          })
        }
      />
      <div className={style.buttons}>
        <Button
          leftIcon={<MdUpdate />}
          className={style.button}
          colorScheme="green"
          onClick={() => {
            startSession({ question, timer, throwaway });
          }}
          isDisabled={timer === "Custom" ? true : false}
        >
          Start Timer
        </Button>
        <Button
          className={style.button}
          leftIcon={<MdStop />}
          colorScheme="red"
          onClick={endSession}
          isDisabled={count > 0 ? false : true}
        >
          Stop Timer
        </Button>
      </div>
      <Collapse in={isOpen} animateOpacity className={style.valueInformation}>
        {" "}
        <Thumb value={data.outcome} myColor={myColor} />
        <p>
          Value: {data.outcome || "0"}%{" "}
          <span>
            {data.responses || "0"}/{data.participants || "0"}{" "}
            {<Icon as={MdPeople} />}
          </span>
        </p>
        <Timer count={count} time={time} />
        <p className={style.count}>{count}</p>
      </Collapse>{" "}
      <Link to="/">
        {" "}
        <Button
          _hover={{
            background: "white",
            color: "#2C276B",
          }}
          variant="outline"
        >
          <ArrowBackIcon /> Back
        </Button>
      </Link>
    </div>
  );
}

export default ReducerSkView;
