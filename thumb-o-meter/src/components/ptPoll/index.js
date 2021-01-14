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
// ...state.questionData, options: action.options

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
//use this to do the conditional rendering ->

function PtPoll() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [choice, setChoice] = useState("");
  const data = useSocketContext();
  const socket = data[0];

  useEffect(() => {
    //socket listener - socket context
    //if question and option data is set, set session activity to 'true'
    socket.on("pollStart", ({ data }) => {
      //start a poll session and set question to render
      console.log({ data });
      // setQuestionData(data);
      // setSession((session) => true);

      dispatch({ type: "setSession", data: data, view: "session" });
      console.log({ state }, "set session");
    });

    socket.on("sessionStop", () => {
      //end session, reset question display
      console.log("stop session");
      // setSession((session) => false);
      // setQuestionData({});
      dispatch({ type: "stopSession", view: "waiting" });
      console.log({ state }, "session stop");
    });

    // socket.on("resultsUpdate", ({ data }) => {
    //   //submit results, set states and trigger conditionally rendered results display
    //   console.log("results update received");
    //   console.log({ data });
    //   // setResults((results) => true);
    //   // setResultsData((resultsData) => data);
    //   // console.log({ resultsData });

    //   dispatch({ type: "setResults", data: data });
    //   console.log({ state }, "results update");
    // });

    return () => {
      //cleanup
      socket.off("pollstart");
      socket.off("sessionStop");
    };
  }, []);

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

  // function calculateResults(options, oNum) {
  //   //calculate results value from total votes & votes per option
  //   const totalVotes = options.reduce((acc, cur) => {
  //     return acc + cur[3];
  //   }, 0);
  //   //oNum out of totalVotes, return as %
  //   console.log((oNum / totalVotes) * 100);
  //   return (oNum / totalVotes) * 100;
  // }
  //results state - if results state is true, sets session state to FALSE
  //if results is true AND session is false- displays progress bars with results data
  //percentage results of each optiong

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {state.view === "waiting" && <h1>Waiting for question.</h1>}
      {state.view === "session" && (
        <div>
          <h1>{state.questionData.question}</h1>
          {state.questionData.options.map((o, i) => {
            return (
              <ul>
                <li>
                  {o[1]}
                  <button
                    onClick={() =>
                      dispatch({ type: "choice", choice: String(o[0]) })
                    }
                  >
                    ☑
                  </button>
                </li>
              </ul>
            );
          })}
          <p>{state.choice}</p>
          <Button onClick={() => submitVote()}>Submit ➡</Button>
        </div>
      )}
      {state.view === "results" && <SkPollResults data={state.questionData} />}
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

// {resultsData && results ? (
//   <div>
//     <h1>Poll Results :</h1>

//     {resultsData ? (
//       resultsData.options.map((o, i) => {
//         return (
//           <div>
//             <p>{o[1]}</p>
//             <Progress
//               className={style.results}
//               colorScheme={"green"}
//               height="3vh"
//               value={() => calculateResults(resultsData.options, o[0])}
//             />
//           </div>
//         );
//       })
//     ) : (
//       <h1>Results pending</h1>
//     )}
//   </div>
// ) : (
//   <h2 className={style.resultsNone}>Results pending</h2>
// )}
