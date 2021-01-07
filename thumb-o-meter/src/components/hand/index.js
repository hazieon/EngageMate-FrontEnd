import React from "react";
import styles from "./hand.module.css";

function Hand({ clicked, raiseHand }) {
  return (
    <div onClick={raiseHand} className={styles.container}>
      <img
        src={clicked ? "/handDown.png" : "/raisehand.png"}
        alt="Hand Raise Icon"
        className={styles.hand}
      ></img>
    </div>
  );
}

export default Hand;
