import React, { useState } from "react";
import style from "./index.module.css";
import { Input, Select, Stack, HStack, Button, Radio } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

function SkPoll() {
  const [question, setQuestion] = useState("Set Custom Question");
  const [custom, setCustom] = useState(false);
  const [myColor] = useState("#2C276B");
  const [value, setValue] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [optionData, setOptionData] = useState({});
  const [radioValue, setRadioValue] = useState(1);

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
          id={`option ${i + 1}`}
          onChange={handleOptions}
        ></Input>
        <input type="radio" name="correctButton" value={`${i + 1}`} />
        {/* <Button id={`option ${i + 1}`} onClick={handleClick}>
          {" "}
        </Button> */}
      </div>
    );
  }

  function handleClick() {
    setCorrect(!correct);
    // on click change the button icon to a emoji tick and need to send the correct answer in the handle submit object
    console.log({ correct });
  }

  function handleOptions(e) {
    setOptionData({ ...optionData, [e.target.id]: e.target.value });
  }

  function remove() {
    arr.pop();
    setValue(value - 1);
    console.log(arr);
  }

  function add() {
    setValue(value + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const correct = e.target.elements.correctButton.value;
    const obj = {
      question,
      ...optionData,
      correctAnswer: correct,
      uuid: uuidv4(),
    };
    console.log(obj);
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
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {/* <h1>The Question Here</h1> */}
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
          {value < 4 ? <Button onClick={add}>✏️</Button> : ""}
          <Button onClick={remove}>🗑</Button>
          <Button type="submit">Submit</Button>
        </HStack>
      </form>
    </div>
  );
}
export default SkPoll;
