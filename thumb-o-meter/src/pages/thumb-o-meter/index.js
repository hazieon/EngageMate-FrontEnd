import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import styles from "./index.module.css";
// import { Button } from "@chakra-ui/react";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";
import {
  Flex,
  Box,
  Button,
  Heading,
  VStack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://callback-cats.herokuapp.com";
let socket;

const Thumbometer = () => {
  const [response, setResponse] = useState("");
  const [speakerView, setSpeakerView] = useState();
  const [data, setData] = useState({});
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.emit("connection");
    //join room request - get name, role from auth
    socket.emit("joinroom", {
      name: "Ben", //take from auth
      role: "coach",
      room: "thumbometer",
    });

    //listen for thumb update, take in session data
    //useEffect - pass down session data obj

    //start thumb session listener - destructures data and timer, sets state
    socket.on("startThumb", ({ sessionData, timer }) => {
      setData(sessionData);
      setTime(timer);
      console.log("start thumb recieved");
    });

    socket.on("thumbUpdate", ({ sessionData }) => {
      setData(sessionData);
      console.log("thumb updated");
    });

    socket.on("counter", (counter) => {
      setCount(counter);
      console.log(counter);
    });

    //finished listener - sets final data state
    socket.on("finished", ({ sessionData }) => {
      setData(sessionData);
      console.log("finished session");
      console.log({ sessionData });
      //disable slider here - state
      setCount(0);
    });

    return () => socket.disconnect();
  }, []);

  //hand this function down to speaker view - pass in q and timer
  function startSession({ question, timer }) {
    socket.emit("start", { question, timer });
    console.log("started session");
  }

  //function to stop the timer and end the session - pass this down to speaker view
  function endSession() {
    socket.emit("stopTimer");
  }
  //pass down & call in ppt view - saves sessionData object
  function submitData(val) {
    socket.emit("submission", { value: val });
  }

  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
          <NavBar />
          <Center>
            <h1 className={styles.heading}>Thumb-O-Meter</h1>
          </Center>
          <Center>
            <Button
              className={styles.button}
              bg="#7f56f2"
              onClick={() => setSpeakerView(!speakerView)}
            >
              {speakerView ? "Show ptView" : "Show skView"}
            </Button>
          </Center>
          <Center>
            {speakerView && (
              <SkView
                data={data}
                startSession={startSession}
                endSession={endSession}
                count={count}
                time={time}
                setTime={setTime}
              />
            )}
            {!speakerView && (
              <PtView
                data={data}
                submit={submitData}
                time={time}
                count={count}
              />
            )}
          </Center>
        </main>
      </Box>
    </Flex>
  );
};

export default Thumbometer;
