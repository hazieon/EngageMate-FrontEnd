import React, { useState } from "react";
import Hand from "../hand";
import Subheading from "../../components/subheading";
import { Input } from "@chakra-ui/react";
import style from "./ptHand.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
function PtHand() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [isRaised, setIsRaised] = useState(false);
  const [topic, setTopic] = useState("");
  const context = useSocketContext();
  const socket = context[0];
  const result = useRoleContext();

  const loggedUser = result[2];
  const name = loggedUser?.given_name;
  const picture = loggedUser?.picture;
  function raiseHand(name, topic, picture) {
    socket.emit("handRaised", { name: name, topic: topic, picture: picture });
    setIsRaised(!isRaised);
  }

  function lowerHand() {
    socket.emit("lowerhand");
    setIsRaised(!isRaised);
  }

  function handleChange(value) {
    setTopic(value);
    console.log(topic);
  }

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <Subheading
        text={isRaised ? "Click To Lower Hand" : "Click To Raise Hand"}
      />
      <Hand
        raiseHand={() =>
          isRaised ? lowerHand() : raiseHand(name, topic, picture)
        }
        clicked={!isRaised}
      />
      <Input onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default PtHand;
