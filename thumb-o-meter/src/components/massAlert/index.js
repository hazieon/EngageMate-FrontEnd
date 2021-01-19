import React, { useState } from "react";
import styles from "./index.module.css";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import useSocketContext from "../../context/socketContext";

function MassAlert() {
  const [message, setMessage] = useState("");

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

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="message">
        <FormLabel>Enter message:</FormLabel>
        <Input type="text" onChange={handleChange} autoComplete="off" />
      </FormControl>
      <Button colorScheme="teal" type="submit">
        Send
      </Button>
    </form>
  );
}

export default MassAlert;
