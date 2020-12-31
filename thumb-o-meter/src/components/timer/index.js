import { Progress } from "@chakra-ui/react";
import styles from "./index.module.css";

//takes in time as a prop, calculates this into a percentage?
function Timer({ count, time }) {
  //function to initially set time start, calc as a %?
  //function to update time as it decreases on the backend
  function calculateValue() {
    return (Number(count) / Number(time)) * 100;
  }

  return (
    <div className={styles.container}>
      <Progress
        className={styles.timer}
        colorScheme={count < 5 ? "red" : "green"}
        height="3vh"
        value={calculateValue()}
      />
    </div>
  );
}

export default Timer;
