import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
import Hand from "../hand";
import { createStandaloneToast, HStack, Button } from "@chakra-ui/react";
import Push from "push.js";
import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
function SkHand() {
  //when hand is raised, server adds them to a list of raised hands - name, pic
  const [hands, setHands] = useState([{ name: "", topic: "No Hands Raised" }]);
  //const [handsRaised, setHandsRaised] = useState([]);
  const context = useSocketContext();
  const socket = context[0];
  const result = useRoleContext();

  const loggedUser = result[2];
  const name = loggedUser?.given_name || "Ben";

  function createNotifications(handData) {
    console.log({ handData });

    Push.create(`${handData.name} has raised their hand!`, {
      body: `${handData.topic}`,
      icon: "/raisehand.png",
      timeout: 4000,
      onClick: function() {
        window.focus();
        this.close();
      },
    });

    notificationToast(handData);
  }

  function notificationToast(handData) {
    const toast = createStandaloneToast();
    toast({
      title: `${handData.name}`,
      description: `${handData.topic}`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  }

  function removeHand(index, id) {
    //   // immutably remove individual hand raise
    console.log(id);
    console.log(socket.id);
    setHands([...hands.slice(0, index), ...hands.slice(index + 1)]);
    //send a message to back end sockets to remove that user
    socket.emit("speakerLowerHand", {
      id,
    });
  }

  useEffect(() => {
    socket.emit("raisehandroom", {
      name: name,
      room: "raisehand",
    });

    const handler = ({ handRaiseData }) => {
      // setHandsRaised(handRaiseSubmissions);
      console.log("hand raised info received");
      //setHands(handRaiseData);
      handleSetHands(handRaiseData);
      console.log("hands -", hands);
      console.log({ handRaiseData });

      if (handRaiseData.length !== 0) {
        createNotifications(handRaiseData[handRaiseData.length - 1]);
      }
    };

    const lowerHandler = ({ handRaiseData }) => {
      // setHandsRaised(handRaiseSubmissions);
      console.log("hand raised info received");
      //setHands(handRaiseData);
      handleSetHands(handRaiseData);
    };
    socket.on("handRaiseInfo", handler);
    socket.on("lowerHandRaiseInfo", lowerHandler);

    return () => {
      socket.emit("leaveRaiseHand");
      console.log("user left room");
      socket.off("handRaiseInfo");
      socket.off("lowerHandRaiseInfo");
    };
  }, []);

  function handleSetHands(data) {
    setHands(data);
  }

  console.log(hands);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: "#2C276B", color: "white" }}
    >
      <div className={styles.notifySpot}>
        <p className={hands.length > 0 ? styles.notify : styles.noNotify}>
          {hands.length}
        </p>
      </div>
      <Hand />
      {hands.length < 1 ? (
        <h1 style={{ fontSize: "2rem" }}>No Hands Raised</h1>
      ) : (
        <section className={styles.handsList}>
          {hands.map((h, i) => (
            <div>
              <ul key={i} style={{ marginBottom: "5px" }}>
                <li key={i} className={styles.handRaise}>
                  {h.name ? h.name.toUpperCase() : "Guest"}: {h.topic}
                  <button
                    key={i}
                    className={styles.myBtn}
                    onClick={() => removeHand(i, h.id)}
                  >
                    <CloseIcon
                      //style={{ color: "white", width: "1rem", height: "1rem" }}
                      className={styles.myBtn}
                    />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </section>
      )}
      <HStack className={styles.box}>
        {hands.map((h, i) => (
          <img src={h.picture} key={i} alt={name} className={styles.picture} />
        ))}
      </HStack>
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

export default SkHand;
