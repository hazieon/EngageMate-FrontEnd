import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import styles from "./index.module.css";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";
import ReducerSkView from "../../components/skView/skViewReduce";
import Footer from "../../components/footer";
import Title from "../../components/heading";
import { createStandaloneToast, LightMode, Text } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";
import { successToast, burntToast } from "../../components/toastAlerts/index";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
// import socketIOClient from "socket.io-client";
import { config } from "../../config";
import useSocketContext from "../../context/socketContext";
const { url } = config;
// const ENDPOINT = url;
// let socket;

const Thumbometer = () => {
  // const [speakerView, setSpeakerView] = useState();

  const [data, setData] = useState({});
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const context = useSocketContext();
  const socket = context[0];
  console.log(socket);
  async function handleSubmit({ sessionData }) {
    //https://callback-cats.herokuapp.com/session
    console.log(sessionData);
    const res = await fetch(`${url}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sessionData),
    });

    //check the status of the data that is returned. If not 200 then its an error!
    //will add a toast pop up here
    if (res.status === 200) {
      //calls the toast function to create a success popup
      successToast({
        name: "Session Submit Success.",
        message: "successfully submitted data from the session.",
      });
      console.log("Success: session data posted");
    } else {
      burntToast({
        name: "Failed Session Submission",
        message: "failed to submit session data to the database.",
      });
    }
  }

  const result = useRoleContext();
  const role = result[0];
  const loggedUser = result[2];
  const name = loggedUser?.given_name;
  console.log(role);
  console.log(loggedUser);

  useEffect(() => {
    //join room request - get name, role from auth
    socket.emit("joinroom", {
      name: name, //take from auth
      role: role,
      room: "thumbometer",
    });

    //start thumb session listener - destructures data and timer, sets state
    socket.on("startThumb", ({ sessionData, timer }) => {
      setData(sessionData);
      setTime(timer);
      console.log("start thumb recieved");
    });

    //listen for thumb update, take in session data
    socket.on("thumbUpdate", ({ sessionData }) => {
      setData(sessionData);
      console.log("thumb updated");
    });

    // listen for counter changes
    socket.on("counter", (counter) => {
      setCount(counter);
      console.log(counter);
    });

    //finished listener - sets final data state
    socket.on("finished", handleFinishEvent);

    // Clean up
    return () => {
      socket.emit("leaveThumb");
      socket.off("finished", handleFinishEvent);
    };
  }, []);

  function handleFinishEvent({ sessionData }) {
    setData(sessionData);
    console.log("finished session");
    console.log({ sessionData });
    //call function that posts to session table
    //success or burnt toast
    role === "coach" &&
      name === sessionData.coach &&
      handleSubmit({ sessionData });
    //disable slider here - state
    setCount(0);
  }

  //hand this function down to speaker view - pass in q and timer
  function startSession({ question, timer, throwaway }) {
    socket.emit("start", { question, timer, name, throwaway });
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
      <Box className={styles.container} bg={bg} color={color} w="100%">
        <NavBar />
        <Center>
          <Text
            className={"player animate__animated animate__heartBeat"}
            style={{ textShadow: "0px 3px 3px#7f56f2" }}
          >
            {" "}
            <Title text="Thumbometer" heading="heading" />
          </Text>
        </Center>

        <Center>
          <LightMode>
            {role !== "bootcamper" && (
              <SkView
                data={data}
                startSession={startSession}
                endSession={endSession}
                count={count}
                time={time}
                setTime={setTime}
                bg={bg}
                color={color}
              />
            )}
            {role === "bootcamper" && (
              <PtView
                data={data}
                submit={submitData}
                time={time}
                count={count}
                bg={bg}
                color={color}
              />
            )}
          </LightMode>
        </Center>
      </Box>
    </Flex>
  );
};

export default Thumbometer;
