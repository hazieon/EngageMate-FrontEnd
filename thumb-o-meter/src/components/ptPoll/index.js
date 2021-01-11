import React, { useState } from "react";
import style from "./index.module.css";
import Subheading from "../subheading";

function PtPoll() {
  const [myColor, setMyColor] = useState("#2C276B");
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <Subheading text={"Question placeholder"} />
    </div>
  );
}

export default PtPoll;
