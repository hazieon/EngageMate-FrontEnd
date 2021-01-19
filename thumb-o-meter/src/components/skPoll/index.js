import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { Input, Select, Stack, HStack, Button, Center } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import useSocketContext from "../../context/socketContext";
import SkPollResults from "../skPollResults";
import { ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import StartSession from "../massAlert/startSession";
import { VscDebugStart } from "react-icons/vsc";
function SkPoll() {
  const [question, setQuestion] = useState("Set Custom Question");
  const [custom, setCustom] = useState(false);
  const [myColor] = useState("#2C276B");
  const [value, setValue] = useState(0);
  const [optionData, setOptionData] = useState([]);
  const [resultsObj, setResultsObj] = useState({});
  const [pollStarted, setPollStarted] = useState(false);

  const context = useSocketContext();
  const socket = context[0];

  useEffect(() => {
    socket.on("resultsUpdate", (obj) => {
      console.log("Results update received");
      updateResultsObj(obj);
    });

    socket.on("pollStart", ({ data }) => {
      console.log("data from server at poll start", data);
    });

    return () => {
      socket.off("resultsUpdate");
      socket.off("pollStart");
    };
  }, []);

  function updateResultsObj(obj) {
    console.log("Results update received", obj);
    setResultsObj(obj.data);
  }

  const arr = [];
  for (let i = 0; i < value; i++) {
    // console.log(i);
    arr.push(
      <div>
        <Input
          type="text"
          placeholder={`set option ${i + 1}`}
          width="300px"
          id={i + 1}
          onChange={handleOptions}
          autoComplete="off"
          maxLength="30"
        ></Input>
        <label for={`choice${i + 1}`}>
          <input
            id={`choice${i + 1}`}
            type="radio"
            name="correctButton"
            value={`${i + 1}`}
            className={style.radio}
          />
          <span></span>
        </label>
      </div>
    );
  }

  function handleOptions(e) {
    setOptionData({
      ...optionData,
      [e.target.id]: e.target.value,
    });
  }

  function remove() {
    arr.pop();
    setValue(value - 1);
    console.log(arr);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const correct = e.target.elements.correctButton.value;
    const obj = {
      question,
      options: Object.keys(optionData).map((key) => [
        Number(key),
        optionData[key],
        0,
      ]),
      correctAnswer: correct,
      uuid: uuidv4(),
    };

    startPoll(obj);
  }

  function handleSession(e) {
    if (e.target.value !== "custom") {
      setCustom(false);
      setQuestion(e.target.value);
      console.log({ question });
    }
    if (e.target.value === "custom") {
      setCustom(true);
    }
  }

  function startPoll(data) {
    socket.emit("pollStart", { data });
    setPollStarted(true);
    setResultsObj(data);
    console.log("Poll started - Data sent to server", { data });
  }

  function stopPoll() {
    setPollStarted(false);
    setQuestion((question) => "");
    setOptionData((optionData) => {});
    setResultsObj((resultsObj) => {});
    setCustom((custom) => false);
    socket.emit("sessionStop");
    console.log("Speaker has ended poll");
  }

  return (
    <div
      className={style.container}
      style={{ backgroundColor: `${myColor}`, color: "white" }}
    >
      <StartSession
        className={style.button}
        message="Live Poll session starting. Head to the Live Quiz page to join!"
        icon={<VscDebugStart />}
      />
      {!pollStarted && (
        <form className={style.select} onSubmit={handleSubmit}>
          <Select placeholder="Select a question" onChange={handleSession}>
            <option value="custom">Set a custom question</option>
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
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Stack className="optionsInput">{arr}</Stack>
          <Center>
            <HStack>
              {value < 4 ? (
                <Button
                  style={{ color: "white" }}
                  colorScheme={myColor}
                  onClick={() => setValue(value + 1)}
                >
                  <EditIcon />
                </Button>
              ) : (
                ""
              )}
              <Button
                style={{ color: "white" }}
                colorScheme=""
                onClick={remove}
              >
                <DeleteIcon />
              </Button>
              <Button style={{ color: "white" }} colorScheme="" type="submit">
                Submit
              </Button>
            </HStack>
          </Center>
        </form>
      )}
      {pollStarted && (
        <SkPollResults
          question={resultsObj}
          stopPoll={stopPoll}
          socket={socket}
        />
      )}{" "}
      <br />
      <Link to="/">
        <Button
          _hover={{
            background: "white",
            color: `${myColor}`,
          }}
          variant="outline"
        >
          <ArrowBackIcon /> Back
        </Button>
      </Link>
    </div>
  );
}
export default SkPoll;
