import React, { useState, useEffect, useReducer } from "react";
import style from "./index.module.css";
import { Button } from "@chakra-ui/react";

import useSocketContext from "../../context/socketContext";
import SkPollResults from "../skPollResults";

const initialState = {
  session: false,
  results: false,
  questionData: { question: "", options: [[], []] },
  choice: "",
  view: "waiting",
};

function reducer(state, action) {
  switch (action.type) {
    case "setSession":
      return {
        ...state,
        questionData: action.data,
        session: true,
        view: action.view,
      };
    case "choice":
      return { ...state, choice: action.choice };
    case "setResults":
      return {
        ...state,
        results: true,
        questionData: action.data,
        view: action.view,
      };
    case "stopSession":
      return { ...state, session: false, questionData: {}, view: action.view };

    default:
      throw new Error();
  }
}

function PtPoll() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useSocketContext();
  const socket = data[0];

  useEffect(() => {

    socket.on("pollStart", handlePollStart);

    socket.on("sessionStop", handleSessionStop);


    return () => {
      //cleanup
      socket.off("sessionStop");
    };
  }, []);

  function handlePollStart({ data }) {
    console.log({ data });
    dispatch({ type: "setSession", data: data, view: "session" });
    console.log({ state }, "set session");
    socket.off("pollStart", handlePollStart);
  }

  function handleSessionStop() {
    //end session, reset question display
    console.log("stop session");

    dispatch({ type: "stopSession", view: "waiting" });
    console.log({ state }, "session stop");
    socket.on("pollStart", handlePollStart);
  }

  function submitVote() {
    //submits the vote, if choice is set
    //changes view again to view results (set another state)
    if (state.choice !== "") {
      socket.emit("vote", { data: state.choice });

      // setResults((results) => true);
      dispatch({ type: "setResults", view: "results" });
      dispatch({ type: "choice", data: state.choice });
      console.log("vote submitted", state.choice);
      console.log({ state });
    } else {
      console.log("choice not set");
    }
  }

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {state.view === "waiting" && <h1>Waiting for question.</h1>}
      {state.view === "session" && (
        <div className={style.sessionBox}>
          <h1>{state.questionData.question}</h1>
          <ul className={style.optionsList}>
            {state.questionData.options.map((o, i) => {
              return (
                <li className={style.option}>
                  {o[1]}
                  <button
                    onClick={() =>
                      dispatch({ type: "choice", choice: String(o[0]) })
                    }
                  >
                    ☑
                  </button>
                </li>
              );
            })}
          </ul>
          <p>{state.choice}</p>
          <Button onClick={() => submitVote()}>Submit ➡</Button>
        </div>
      )}

      {state.view === "results" && <SkPollResults data={state.questionData} />}
    </div>
  );
}

export default PtPoll;
