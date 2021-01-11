import React, { useState } from "react";
import style from "./index.module.css";
import { Input, Select, Stack, HStack, Button, Radio } from "@chakra-ui/react";
function SkPoll() {
  const [question, setQuestion] = useState("Set Custom Question");
  const [custom, setCustom] = useState(false);
  const [myColor] = useState("#2C276B");
  const [value, setValue] = useState(0);
  const [correct, setCorrect] = useState();

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
        ></Input>
        <Button>✅</Button>
      </div>
    );
  }

  function remove() {
    arr.pop();
    setValue(value - 1);
  }

  function add() {
    setValue(value + 1);
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
      <Select
        placeholder="Select A Question"
        onChange={handleSession}
        // isDisabled={count > 0 ? true : false}
        className={style.select}
      >
        <option value="Which one is the odd one out?">
          Which one is the odd one out?
        </option>
        <option value="True or False:">True or False:</option>
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
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Stack className="optionsInput">{arr}</Stack>
      <HStack>
        {value < 4 ? <Button onClick={add}>✏️</Button> : ""}
        <Button onClick={remove}>🗑</Button>
        <Button>Submit</Button>
      </HStack>
    </div>
  );
}
export default SkPoll;
