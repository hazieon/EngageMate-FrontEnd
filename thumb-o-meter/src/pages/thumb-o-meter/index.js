import React, { useState, useEffect } from "react";
import "./index.module.css";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

const Thumbometer = () => {
  const [response, setResponse] = useState("");
  const [speakerView, setSpeakerView] = useState(true);
  const [data, setData] = useState({});
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
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
    });

    socket.on("thumbUpdate", ({ sessionData }) => {
      setData(sessionData);
    });

    socket.on("counter", (counter) => {
      setCount(counter);
    });

    //finished listener - sets final data state
    socket.on("finished", ({ sessionData }) => {
      setData(sessionData);
      //disable slider here - state
    });

    return () => socket.disconnect();
  }, []);

  //hand this function down to speaker view - pass in q and timer
  function startSession({ question, timer }) {
    socket.emit("start", { question, timer });
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
    <main>
      <h1>Thumbometer</h1>
      {speakerView && (
        <SkView
          data={data}
          start={startSession}
          end={endSession}
          count={count}
        />
      )}
      {!speakerView && (
        <PtView data={data} submit={submitData} time={time} count={count} />
      )}
    </main>
  );
};

export default Thumbometer;
