import { Progress } from "@chakra-ui/react";
import { useState } from "react";

//takes in time as a prop, calculates this into a percentage?
function Timer() {
  const [time, setTime] = useState(100);

  //function to initially set time start, calc as a %?
  //function to update time as it decreases on the backend

  return <Progress value={time} />;
}

export default Timer;
