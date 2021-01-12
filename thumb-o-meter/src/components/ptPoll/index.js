import React, { useState } from "react";
import style from "./index.module.css";
import { Select, Button, Radio } from "@chakra-ui/react";

function PtPoll({ data }) {
  const [myColor, setMyColor] = useState("#2C276B");
  const [session, setSession] = useState(true);

  //results state - if results state is true, sets session state to FALSE
  //if results is true AND session is false- displays progress bars with results data
  //percentage results of each option

  function sessionActive() {
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
        <h1>waiting for poll</h1>
      )}
      <Button type="submit">Submit ➡</Button>
    </div>
  );
}

export default PtPoll;
