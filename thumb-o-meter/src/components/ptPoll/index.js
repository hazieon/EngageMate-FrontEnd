import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import {
  Select,
  Button,
  Radio,
  SliderTrack,
  SliderFilledTrack,
  Progress,
} from "@chakra-ui/react";

import useSocketContext from "../../context/socketContext";

function PtPoll() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [session, setSession] = useState(false);
  const [results, setResults] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [choice, setChoice] = useState("");

  const data = useSocketContext();
  const socket = data[0];

  //results update
  //session stop
  //expecting object with key of data - option number

  // function sessionResults() {
  //   //sets the results state to be the results data as sent in
  //   if (resultsData) {
  //     setResults(resultsData);
  //     console.log(resultsData);
  //   }
  // }

  useEffect(() => {
    //socket listener - socket context
    //if question and option data is set, set session activity to 'true'
    //session 'true' conditionally renders
    socket.on("pollStart", ({ data }) => {
      //start a poll session and set question to render
      console.log(data);
      setQuestionData(data);
      setSession((session) => true);
    });
    socket.on("sessionStop", () => {
      //end session, reset question display
      console.log("stop session");
      setSession((session) => false);
      setQuestionData({});
    });

    socket.on("resultsUpdate", ({ data }) => {
      //submit results, set states and trigger conditionally rendered results display
      console.log("results update received");
      console.log({ data });
      setResults((results) => true);
      setResultsData((resultsData) => data);
      console.log({ resultsData });
    });

    return () => {
      //cleanup
      socket.off("pollstart");
      socket.off("sessionStop");
    };
  }, []);

  function submitVote() {
    //submits the vote, if choice is set
    //changes view again to view results (set another state)
    if (choice !== "") {
      socket.emit("vote", { data: choice });
      setResults((results) => true);
      return console.log("vote submitted", choice);
    }
    console.log("choice not set");
  }

  function calculateResults(options, oNum) {
    //calculate results value from total votes & votes per option
    const totalVotes = options.reduce((acc, cur) => {
      return acc + cur[3];
    }, 0);
    //oNum out of totalVotes, return as %
    console.log((oNum / totalVotes) * 100);
    return (oNum / totalVotes) * 100;
  }
  //results state - if results state is true, sets session state to FALSE
  //if results is true AND session is false- displays progress bars with results data
  //percentage results of each optiong

  return (
    <div
      className={style.container}
      style={{ backgroundColor: myColor, color: "white" }}
    >
      {session ? (
        <div>
          {questionData.options.map((o, i) => {
            return (
              <ul>
                <li>
                  {o[1]} <button onClick={() => setChoice(o[0])}>☑</button>
                </li>
              </ul>
            );
          })}
          <p>{choice}</p>
        </div>
      ) : (
        <h1>Waiting for question</h1>
      )}
      {resultsData && results ? (
        <div>
          <h1>Poll Results :</h1>

          {resultsData ? (
            resultsData.options.map((o, i) => {
              return (
                <div>
                  <p>{o[1]}</p>
                  <Progress
                    className={style.results}
                    colorScheme={"green"}
                    height="3vh"
                    value={() => calculateResults(resultsData.options, o[0])}
                  />
                </div>
              );
            })
          ) : (
            <h1>Results pending</h1>
          )}
        </div>
      ) : (
        <h2 className={style.resultsNone}>Results pending</h2>
      )}

      <Button
        style={{ color: "white" }}
        colorScheme=""
        onClick={() => submitVote()}
      >
        Submit ➡
      </Button>
    </div>
  );
}

export default PtPoll;

// <Progress
// className={resultsData.option1 ? style.results : style.resultsNone}
// colorScheme={"green"}
// height="5vh"
// value={resultsData.options}
// />
