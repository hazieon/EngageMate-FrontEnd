import React, { useState } from "react";
import styles from "./index.module.css";
import { Button } from "@chakra-ui/react";
import useSocketContext from "../../context/socketContext";

function StartSession({ message, icon }) {
  const context = useSocketContext();
  const socket = context[0];

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ message });
    try {
      socket.emit("massMessage", { message });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Button
      className={styles.myBtn}
      onClick={handleSubmit}
      leftIcon={icon}
      colorScheme="teal"
      type="submit"
    >
      Start Session
    </Button>
  );
}

export default StartSession;
