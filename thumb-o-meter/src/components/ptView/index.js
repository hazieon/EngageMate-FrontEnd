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

  return (
    <div className={style.container}>
      <h1>{data.question}</h1>
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
      <h3>Value: {value}%</h3>
      <p>
        {data.responses}/{data.participants} {<Icon as={MdPeople} />}
      </p>
      <p>{count}</p>
      <Timer count={count} time={time} />
    </div>
  );
}

export default PtView;
