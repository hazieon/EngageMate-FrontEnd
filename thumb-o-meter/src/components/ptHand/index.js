import React, { useState } from "react";
import Hand from "../hand";
import Subheading from "../../components/subheading";
import { Input } from "@chakra-ui/react";
import styles from "./ptHand.module.css";

function PtHand() {
  const [isRaised, setIsRaised] = useState(true);
  const [topic, setTopic] = useState("");

  function raiseHand() {
    setIsRaised(!isRaised);
  }

  function handleChange(value) {
    setTopic(value);
    console.log(topic);
  }

  return (
    <div className={styles.container}>
      <Subheading
        text={isRaised ? "Click To Raise Hand" : "Click To Lower Hand"}
      />
      <Hand raiseHand={raiseHand} clicked={isRaised} />
      <Input onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default PtHand;
