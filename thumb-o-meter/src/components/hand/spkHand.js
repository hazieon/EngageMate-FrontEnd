import React from "react";
import styles from "./hand.module.css";

function SPKHand({ lowerHand }) {
  return (
    <div onClick={lowerHand()} className={styles.container}>
      <img
        src="/raisehand.png"
        alt="Hand Raise Icon"
        className={styles.hand}
      ></img>
    </div>
  );
}

export default SPKHand;
