import React, { useState } from "react";
import style from "./index.module.css";
import { Select } from "@chakra-ui/react";
import { Button, Icon } from "@chakra-ui/react";
import { MdUpdate, MdStop, MdPeople } from "react-icons/md";
import Thumb from "../thumb";
import Timer from "../timer/index";

function SkView({ data, startSession, endSession, count, time, setTime }) {
  const [question, setQuestion] = useState("Forgot to set question");
  const [timer, setTimer] = useState(5);

  function handleSession(e) {
    setQuestion(e.target.value);
    console.log(question);
  }

  function handleTimer(e) {
    setTimer(Number(e.target.value));
    setTime(Number(e.target.value));
    console.log(timer);
  }

  return (
    <div className={style.container}>
      {/* <h1>The Question Here</h1> */}
      <Select
        placeholder="Select question"
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
      </Select>

      {/* <Input placeholder="Write your own question?" /> */}
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
          leftIcon={<MdStop />}
          colorScheme="red"
          onClick={endSession}
          isDisabled={count > 0 ? false : true}
        >
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
