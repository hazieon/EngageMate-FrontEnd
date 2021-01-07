import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import Thumb from "../thumb";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdPeople } from "react-icons/md";
import Timer from "../timer/index";

function PtView({ data, submit, time, count }) {
  const [myColor, setMyColor] = useState("#2C276B");
  // display the question
  // rotatable thumb
  // slider
  // slider value
  // timer

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (count > 0) {
      submit(value);
    }
  }, [value]);

  // slider.addEventListener("change", () => {
  //   sliderVal.innerText = `Value: ${slider.value}`;
  //   socket.emit("submission", { value: slider.value });
  // });
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
      <h1>{data.question || "Waiting session start"}</h1>
      <Thumb value={value} />
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        onChangeEnd={(val) => setValue(val)}
        isDisabled={count > 0 ? false : true}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <h3>Value: {value || "0"}%</h3>
      <p>
        {data.responses || "0"}/{data.participants || "0"}{" "}
        {<Icon as={MdPeople} />}
      </p>
      <p>{count}</p>
      <Timer count={count} time={time} />
    </div>
  );
}

export default PtView;
