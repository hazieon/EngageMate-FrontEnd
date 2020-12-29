import React, { useState } from "react";
import style from "./index.module.css";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdUpdate } from "react-icons/md";
import Thumb from "../thumb";

function SkView() {
  // question
  //maybe have dropdown (with preset questions) and input (for create questions)
  // Thumb
  // overall mood
  // timer (start)
  // participants

  const [value, setValue] = useState(0);

  return (
    <div className={style.container}>
      {/* <h1>The Question Here</h1> */}
      <Select placeholder="Select question">
        <option value="option1">How are you feeling?</option>
        <option value="option2">Did you understand that?</option>
        <option value="option3">Are you comfortable with moving on?</option>
      </Select>
      <Input placeholder="Write your own question?" />

      <Thumb value={value} />
      <h3>Value: {value}%</h3>
      <h4>Participants amount</h4>
      <p>Timer Here</p>
      {/* <Button
        size="md"
        height="35px"
        width="150px"
        border="2px"
        borderColor="blue.500"
      >
        Start Timer
      </Button> */}
      <Button leftIcon={<MdUpdate />}>Start Timer</Button>
    </div>
  );
}

export default SkView;
