import React, { useState, useEffect } from "react";
import styles from "./notify.module.css";
import useSocketContext from "../../context/socketContext";
const HandNotify = () => {
  const [hands, setHands] = useState([{ name: "", topic: "No Hands Raised" }]);
  const context = useSocketContext();
  const socket = context[0];

  useEffect(() => {
    const handler = ({ handRaiseData }) => {
      // setHandsRaised(handRaiseSubmissions);
      console.log("hand raised info received");
      //setHands(handRaiseData);
      handleSetHands(handRaiseData);
      console.log("hands -", hands);
      console.log({ handRaiseData });
    };

    const lowerHandler = ({ handRaiseData }) => {
      // setHandsRaised(handRaiseSubmissions);
      console.log("hand raised info received");
      //setHands(handRaiseData);
      handleSetHands(handRaiseData);
    };
    socket.on("handRaiseInfo", handler);
    socket.on("lowerHandRaiseInfo", lowerHandler);
  });

  function handleSetHands(data) {
    setHands(data);
  }
  return (
    <div>
      <p className={hands.length > 0 ? styles.notify : styles.noNotify}>
        {hands.length}
      </p>
    </div>
  );
};

export default HandNotify;
