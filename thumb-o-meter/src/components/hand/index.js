import React from "react";
import styles from "./hand.module.css";

function Hand({ isRaised, setIsRaised, raiseHand, lowerHand }) {
  return (
    <div
      onClick={() => {
        if (isRaised) {
          lowerHand();
        } else {
          raiseHand();
        }
        setIsRaised(!isRaised);
      }}
      className={styles.container}
    >
      <img
        src={isRaised ? "/raisehand.png" : "/handDown.png"}
        alt="Hand Raise Icon"
        className={styles.hand}
      ></img>
    </div>
  );
}

export default Hand;
