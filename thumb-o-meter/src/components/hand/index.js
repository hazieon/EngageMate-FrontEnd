import React from "react";
import styles from "./hand.module.css";

function Hand({ clicked }) {
  return (
    <div className={styles.container}>
      <img
        src="/raisehand.png"
        alt="Hand Raise Icon"
        className={styles.hand}
      ></img>
    </div>
  );
}

export default Hand;
