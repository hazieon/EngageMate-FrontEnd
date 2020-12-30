import React, { useState } from "react";
import style from "./index.module.css";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { MdUpdate, MdStop, MdPeople } from "react-icons/md";
import Thumb from "../thumb";
import Timer from "../timer/index";

// startSessionBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const question = document.querySelector("#questionInput").value;
//   const timer = document.querySelector("#timerInput").value;

//   socket.emit("start", { question, timer });

//   question.value = "";
// });

// endSessionBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   socket.emit("stopTimer");
// });

function SkView({ data, startSession, endSession, count }) {
  // question
  //maybe have dropdown (with preset questions) and input (for create questions)
  // Thumb
  // overall mood
  // timer (start button?)
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
      {/* <Input placeholder="Write your own question?" /> */}
      <Select placeholder="Timer Amount">
        <option value="option1">10 Seconds</option>
        <option value="option2">15 Seconds</option>
        <option value="option3">20 Seconds</option>
        <option value="option4">25 Seconds</option>
        <option value="option5">30 Seconds</option>
      </Select>

      <Thumb value={value} />
      <div className={style.valueInformation}>
        <h3>Value: {value}%</h3>
        <p>25/30{<Icon as={MdPeople} />}</p>
      </div>
      <Timer />
      <div className={style.buttons}>
        <Button leftIcon={<MdStop />} colorScheme="red">
          Stop Timer
        </Button>
        <Button rightIcon={<MdUpdate />} colorScheme="green">
          Start Timer
        </Button>
      </div>
    </div>
  );
}

export default SkView;
