import React, { useState, useEffect } from "react";
import Hand from "../hand";
import Subheading from "../../components/subheading";
import { Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "./ptHand.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
import { ArrowBackIcon } from "@chakra-ui/icons";
function PtHand() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [isRaised, setIsRaised] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [topic, setTopic] = useState("");
  const context = useSocketContext();
  const socket = context[0];
  const result = useRoleContext();

  const loggedUser = result[2];
  const name = loggedUser?.given_name || loggedUser?.nickname;
  const picture = loggedUser?.picture;

  useEffect(() => {
    socket.on("participantLowerHand", ({ myUniqueNumber }) => {
      console.log(myUniqueNumber);
      console.log(socket.id);
      if (myUniqueNumber === socket.id) {
        changeHandState();
        console.log(isRaised);
        console.log("hand lowered by coach");
      } else {
        console.log("is this running?");
      }
    });
  }, []);

  function changeHandState() {
    setIsRaised((isRaised) => !isRaised);
  }

  function raiseHand() {
    socket.emit("handRaised", { name: name, topic: topic, picture: picture });

    console.log(isRaised);
  }

  function lowerHand() {
    socket.emit("lowerhand");

    console.log("hand lowered by me");
    console.log(isRaised);
  }

  function handleChange(value) {
    setTopic(value);
    console.log(topic);
  }
  function handleClick() {
    setTopic("");
  }
  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <Subheading
        text={isRaised ? "Click To Lower Hand" : "Click To Raise Hand"}
        style={{ fontSize: "1.5rem" }}
      />
      <Hand
        isRaised={isRaised}
        setIsRaised={setIsRaised}
        raiseHand={raiseHand}
        lowerHand={lowerHand}
        handleClick={handleClick}
      />
      <Input value={topic} onChange={(e) => handleChange(e.target.value)} />
      <br />

      <Link to="/">
        {" "}
        <Button
          _hover={{
            background: "white",
            color: "#2C276B",
          }}
          variant="outline"
        >
          <ArrowBackIcon /> Back
        </Button>
      </Link>
    </div>
  );
}

export default PtHand;
