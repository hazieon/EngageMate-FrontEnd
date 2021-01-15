import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import Thumb from "../thumb";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdPeople } from "react-icons/md";
import Timer from "../timer/index";

function PtView({ data, submit, time, count }) {
  const [myColor, setMyColor] = useState("#7f56f2");
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
      setMyColor("#7f56f2");
    } else if (data.outcome <= 33) {
      setMyColor("red");
    } else if (data.outcome > 33 && data.outcome <= 66) {
      setMyColor("orange");
    } else if (data.outcome > 66 && data.outcome <= 100) {
      setMyColor("green");
    }
  }, [data.outcome]);

  return (
    <div
      className={style.container}
      style={{ backgroundColor: "#2C276B", color: "white" }}
    >
      <h1>{data.question || "Awaiting Session Start"}</h1>
      <p className={style.valueInformation}>
        {" "}
        <Thumb value={value} myColor={myColor} />
        <br />
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
        <br />
        <p>
          Value: {value || "0"}%
          <span>
            {data.responses || "0"}/{data.participants || "0"}{" "}
            {<Icon as={MdPeople} />}
          </span>
        </p>
        <Timer count={count} time={time} />
        <p className={style.count}>{count}</p>
      </p>

      <Link to="/">
        {" "}
        <Button
          _hover={{
            background: "white",
            color: "#2C276B",
          }}
          variant="outline"
        >
          <ArrowBackIcon /> Back
        </Button>
      </Link>
    </div>
  );
}

export default PtView;
