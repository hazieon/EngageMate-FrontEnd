import React from "react";
import style from "./index.module.css";

function Thumb({ value, myColor }) {
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <img
        src="/thumb.png"
        alt="Thumbometer Thumb Icon"
        className={style.thumb}
        style={{
          transform: `rotate(${180 + (value / 100) * 180}deg)`,
        }}
      />
    </div>
  );
}

export default Thumb;
