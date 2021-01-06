import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { Select } from "@chakra-ui/react";
import { Button, Icon } from "@chakra-ui/react";
import { MdUpdate, MdStop, MdPeople } from "react-icons/md";
import Thumb from "../thumb";
import Timer from "../timer/index";

function SkView({ data, startSession, endSession, count, time, setTime }) {
  const [question, setQuestion] = useState("Set Custom Question");
  const [timer, setTimer] = useState("Custom");
  const [myColor, setMyColor] = useState("#2C276B");

  function handleSession(e) {
    if (e.target.value !== "custom") {
      setQuestion(e.target.value);
      console.log({ question });
    } else {
      let customQ = prompt("whats your question?");
      setQuestion(customQ);
      console.log({ question });
    }
  }

  function handleTimer(e) {
    if (e.target.value !== "custom") {
      setTimer(Number(e.target.value));
      setTime(Number(e.target.value));
      console.log({ timer });
    } else {
      let customT = prompt("How many seconds should be allowed?");
      setTimer(Number(customT));
      setTime(Number(customT));
      console.log({ timer });
    }
  }
  useEffect(() => {
    if (data.outcome === 0) {
      setMyColor("#2C276B");
    } else if (data.outcome <= 33) {
      setMyColor("red");
    } else if (data.outcome > 33 && data.outcome <= 66) {
      setMyColor("orange");
    } else if (data.outcome > 66 && data.outcome <= 100) {
      setMyColor("green");
    }
  }, [data.outcome]);

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {/* <h1>The Question Here</h1> */}
      <Select
        placeholder="Select Question"
        onChange={handleSession}
        isDisabled={count > 0 ? true : false}
      >
        <option value="How are you feeling?">How are you feeling?</option>
        <option value="Did you understand that?">
          Did you understand that?
        </option>
        <option value="Are you comfortable with moving on?">
          Are you comfortable with moving on?
        </option>
        {/* custom question */}
        <option value="custom">{question}</option>
      </Select>
      <Select
        placeholder="Timer Amount"
        onChange={handleTimer}
        isDisabled={count > 0 ? true : false}
      >
        <option value="10">10 Seconds</option>
        <option value="15">15 Seconds</option>
        <option value="20">20 Seconds</option>
        <option value="25">25 Seconds</option>
        <option value="30">30 Seconds</option>
        <option value="custom">{`${timer} Seconds`}</option>
      </Select>
      <Thumb value={data.outcome} />
      <div className={style.valueInformation}>
        <h3>Value: {data.outcome}%</h3>
        <p>
          {data.responses}/{data.participants} {<Icon as={MdPeople} />}
        </p>
      </div>
      <Timer count={count} time={time} />
      <p>{count}</p>
      <div className={style.buttons}>
        <Button
          className={style.button}
          rightIcon={<MdUpdate />}
          colorScheme="green"
          onClick={() => startSession({ question, timer })}
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
    </div>
  );
}

export default SkView;
