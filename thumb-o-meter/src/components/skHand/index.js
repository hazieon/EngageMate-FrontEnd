import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
import { useAuth0 } from "@auth0/auth0-react";
import Hand from "../hand";
import { createStandaloneToast } from "@chakra-ui/react";
import Push from "push.js";

function SkHand({ usersList, handUsers }) {
  //when hand is raised, server adds them to a list of raised hands - name, pic
  const { user } = useAuth0();
  const [users, setUsers] = useState();
  const [hands, setHands] = useState([]);
  const [myColor, setMyColor] = useState("#2C276B");
  //const [handsRaised, setHandsRaised] = useState([]);
  const context = useSocketContext();
  const result = useRoleContext();
  const role = result[0];
  const socket = context[0];
  const loggedUser = result[2];
  const name = loggedUser?.given_name;

  function createNotifications(handData) {
    console.log({ handData });

    Push.create(`${handData.name} has raised their hand!`, {
      body: `${handData.topic}`,
      icon: "/raisehand.png",
      timeout: 4000,
      onClick: function () {
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

    socket.on("handRaiseInfo", handler);

    return () => {
      socket.emit("leaveRaiseHand");
      console.log("user left room");
      socket.off("handRaiseInfo", handler);
    };
  }, []);

  function handleSetHands(data) {
    setHands(data);
  }

  return (
    <div className={styles.container} style={{ backgroundColor: myColor }}>
      <div className={styles.notifySpot}>
        <p className={hands.length > 0 ? styles.notify : styles.noNotify}>
          {hands.length}
        </p>
      </div>
      <Hand />

      {/* renders a box section which contains the ordered list of users with raised hands */}
      <section className={styles.handsList}>
        {hands.map((h, i) => (
          <ul key={i}>
            <li className={styles.handRaise}>
              {h.name} {h.topic}
              <button onClick={() => removeHand(i, h.id)}>✖</button>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}

export default SkHand;
