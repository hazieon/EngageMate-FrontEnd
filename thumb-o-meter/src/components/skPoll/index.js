import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { Input, Select, Stack, HStack, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import useSocketContext from "../../context/socketContext";
import SkPollResults from "../skPollResults";

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
      setResultsObj(() => obj);
    });

    socket.on("pollStart", ({ data }) => {
      console.log("data from server at poll start", data);
    });

    return () => {
      socket.off("resultsUpdate");
      socket.off("pollStart");
    };
  }, [pollStarted]);

  const arr = [];
  for (let i = 0; i < value; i++) {
    // console.log(i);
    arr.push(
      <div>
        <Input
          type="text"
          placeholder={`set option ${i + 1}`}
          // still trying to figure how to save the value of the input fields to something?
          width="300px"
          id={i + 1}
          onChange={handleOptions}
        ></Input>
        <input
          type="radio"
          name="correctButton"
          value={`${i + 1}`}
          className={style.radio}
        />
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
    <div>
      {!pollStarted && (
        <div className={style.container} style={{ backgroundColor: myColor }}>
          <form onSubmit={handleSubmit}>
            <Select
              placeholder="Select a question"
              onChange={handleSession}
              className={style.select}
            >
              <option value="Which one is the odd one out?">
                Which one is the odd one out?
              </option>
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
            <HStack>
              {value < 4 ? (
                <Button onClick={() => setValue(value + 1)}>:pencil2:</Button>
              ) : (
                ""
              )}
              <Button onClick={remove}>:wastebasket:</Button>
              <Button type="submit">Submit</Button>
            </HStack>
          </form>
        </div>
      )}
      {pollStarted && (
        <SkPollResults data={resultsObj} stopPoll={stopPoll} socket={socket} />
      )}
    </div>
  );
}
export default SkPoll;
