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

function PtPoll({ data }) {
  const [myColor, setMyColor] = useState("#2C276B");
  const [session, setSession] = useState(true);
  const [results, setResults] = useState(true);

  //hardcoded example resultsData, needs to take in from real data
  let resultsData = {
    option1: 20,
    option2: 30,
    option3: 40,
    option4: 10,
  };

  //results update
  //session stop

  function sessionResults() {
    //sets the results state to be the results data as sent in
    if (resultsData) {
      setResults(resultsData);
      console.log(resultsData);
    }
  }
  useEffect(() => {
    sessionResults();
  }, [results]);
  //results state - if results state is true, sets session state to FALSE
  //if results is true AND session is false- displays progress bars with results data
  //percentage results of each optiong

  function sessionActive() {
    //if question and option data is set, set session activity to 'true'
    //session 'true' conditionally renders
    if (data) {
      setSession(true);
    }
  }
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {session ? (
        <div>
          <h1>{data ? data.question : "Waiting for question"}</h1>
          <section>
            <h1>{data ? data.option1 : "Waiting for options"}</h1>
            <Button>◎</Button>
            <h1>{data ? data.option2 : "Waiting for options"}</h1>
            <Button>◎</Button>
            <h1>{data ? data.option3 : "Waiting for options"}</h1>
            <Button>◎</Button>
            <h1>{data ? data.option4 : "Waiting for options"}</h1>
            <Button>◎</Button>
          </section>
        </div>
      ) : (
        <div>
          <h2>Waiting for Poll...</h2>
        </div>
      )}
      {results ? (
        <div>
          <h1>Poll Results :</h1>
          <Progress
            className={results.option1 ? style.results : style.resultsNone}
            colorScheme={"green"}
            height="5vh"
            value={results.option1}
          />
          <Progress
            className={results.option2 ? style.results : style.resultsNone}
            colorScheme={"green"}
            height="5vh"
            value={results.option2}
          />
          <Progress
            className={results.option3 ? style.results : style.resultsNone}
            colorScheme={"green"}
            height="5vh"
            value={results.option3}
          />
          <Progress
            className={results.option4 ? style.results : style.resultsNone}
            colorScheme={"green"}
            height="5vh"
            value={results.option4}
          />
        </div>
      ) : (
        <h2>Results pending</h2>
      )}

      <Button type="submit">Submit ➡</Button>
    </div>
  );
}

export default PtPoll;
