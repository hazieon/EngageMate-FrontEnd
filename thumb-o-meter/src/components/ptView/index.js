import React, { useState } from "react";
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

function PtView() {
  // display the question
  // rotatable thumb
  // slider
  // slider value
  // timer

  const [value, setValue] = useState(0);

  return (
    <div className={style.container}>
      <h1>Question Here</h1>
      <Thumb value={value} />
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        onChangeEnd={(val) => setValue(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <h3>Value: {value}%</h3>
      <p>25/30{<Icon as={MdPeople} />}</p>
      <Timer />
    </div>
  );
}

export default PtView;
