import { Progress, StylesProvider } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./index.module.css";

//takes in time as a prop, calculates this into a percentage?
function Timer() {
  const [time, setTime] = useState(60);

  //function to initially set time start, calc as a %?
  //function to update time as it decreases on the backend
  return (
    <div className={styles.container}>
      <Progress
        className={styles.timer}
        colorScheme={time < 30 ? "red" : "green"}
        height="3vh"
        value={time}
      />
    </div>
  );
}

export default Timer;
