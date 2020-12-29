import React from "react";
import style from "./index.module.css";

function Thumb({ value }) {
  return (
    <div className={style.container}>
      <img
        src="/thumb.png"
        alt="Thumbometer Thumb Icon"
        className={style.thumb}
        style={{ transform: `rotate(${180 + (value / 100) * 180}deg)` }}
      />
    </div>
  );
}

export default Thumb;
