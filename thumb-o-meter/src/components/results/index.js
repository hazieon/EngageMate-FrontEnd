import React, { useState } from "react";
import thumb from "./thumb.png";
import styles from "../results/results.module.css";

function Results() {
  const [thumbResult, setThumbResult] = useState(90);
  const [responses, setResponses] = useState(6);
  const [participants, setParticipants] = useState(10);

  //function to setThumbResult from session Data thumb result
  //set responses value and participants from session Data

  return (
    <div className={styles.results}>
      <img
        className={styles.thumb}
        src={thumb}
        alt="thumb"
        style={{ transform: `rotate(${thumbResult}deg)` }}
      />
      <div>
        <p>
          {responses} / {participants}
        </p>
      </div>
    </div>
  );
  //takes in session data result as props
  //display thumb (angle based on %)
  //display number of responses/participants
}

export default Results;
