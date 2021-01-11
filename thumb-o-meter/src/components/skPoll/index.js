import React, { useState } from "react";
import style from "./index.module.css";
import { Input, Select, Button } from "@chakra-ui/react";

function SkPoll() {
  const [question, setQuestion] = useState("Set Custom Question");
  const [custom, setCustom] = useState(false);
  const [myColor, setMyColor] = useState("#2C276B");
  function handleSession(e) {
    if (e.target.value !== "custom") {
      setCustom(false);

      setQuestion(e.target.value);
      console.log({ question });
    }
    if (e.target.value === "custom") {
      setCustom(true);
    }
  }

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      {/* <h1>The Question Here</h1> */}
      <Select
        placeholder="Select A Question"
        onChange={handleSession}
        // isDisabled={count > 0 ? true : false}
        className={style.select}
      >
        <option value="Which one is the odd one out?">
          Which one is the odd one out?
        </option>
        <option value="True or False:">True or False:</option>
        {/* custom question */}
        <option value="custom">Set a custom question.</option>
      </Select>
      <Input
        focusBorderColor="lime"
        className={style.borderColor}
        style={
          custom
            ? {
                display: "block",
                textAlign: "center",
                borderColor: "grey",
              }
            : { display: "none" }
        }
        placeholder="set custom question..."
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <section className="optionsInput">
        <Input placeholder="option one" width="300px" />
        <Button>☑</Button>
        <Input placeholder="option two" width="300px" />
        <Button>☑</Button>
        <Input placeholder="option three" width="300px" />
        <Button>☑</Button>
      </section>
      <Button>+</Button>

      <Button>Submit</Button>
    </div>
  );
}
export default SkPoll;
