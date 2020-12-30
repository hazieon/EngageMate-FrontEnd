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
  const [question, setQuestion] = useState("");
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState(0);
  function handleSession(e) {
    setQuestion(e.target.value);
    console.log(question);
  }

  function handleTimer(e) {
    setTimer(Number(e.target.value));
    console.log(timer);
  }
  console.log({ data });
  console.log({ count });
  console.log({ question });
  console.log({ timer });
  return (
    <div className={style.container}>
      {/* <h1>The Question Here</h1> */}
      <Select placeholder="Select question" onClick={handleSession}>
        <option value="How are you feeling?">How are you feeling?</option>
        <option value="Did you understand that?">
          Did you understand that?
        </option>
        <option value="Are you comfortable with moving on?">
          Are you comfortable with moving on?
        </option>
      </Select>
      {/* <Input placeholder="Write your own question?" /> */}
      <Select placeholder="Timer Amount" onClick={handleTimer}>
        <option value="10">10 Seconds</option>
        <option value="15">15 Seconds</option>
        <option value="20">20 Seconds</option>
        <option value="25">25 Seconds</option>
        <option value="30">30 Seconds</option>
      </Select>

      <Thumb value={value} />
      <div className={style.valueInformation}>
        <h3>Value: {value}%</h3>
        <p>25/30{<Icon as={MdPeople} />}</p>
      </div>
      <Timer />
      <div className={style.buttons}>
        <Button leftIcon={<MdStop />} colorScheme="red" onClick={endSession}>
          Stop Timer
        </Button>
        <Button
          rightIcon={<MdUpdate />}
          colorScheme="green"
          onClick={() => startSession({ question, timer })}
        >
          Start Timer
        </Button>
      </div>
    </div>
  );
}

export default SkView;
