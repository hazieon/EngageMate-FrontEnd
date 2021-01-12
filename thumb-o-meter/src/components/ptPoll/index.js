import React, { useState } from "react";
import style from "./index.module.css";
import { Select, Button, Radio } from "@chakra-ui/react";

function PtPoll({ data }) {
  const [myColor, setMyColor] = useState("#2C276B");
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <h1>{data ? data.question : "Waiting for question"}</h1>
    </div>
  );
}

export default PtPoll;
