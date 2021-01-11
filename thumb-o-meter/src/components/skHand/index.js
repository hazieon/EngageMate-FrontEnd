import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
import { useAuth0 } from "@auth0/auth0-react";
import Hand from "../hand";
import { motion } from "framer-motion";
import { animationOne, animationTwo } from "../../animations";

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

  function removeHand(index) {
    // immutably remove individual hand raise
    setHands([...hands.slice(0, index), ...hands.slice(index + 1)]);
    //send a message to back end sockets to remove that user
  }

  // function playSound() {
  //   console.log("sound played");
  // }

  useEffect(() => {
    // let intervalId = setInterval(() => {
    //   hands.length > 0 && playSound();

    //   //clearInterval(intervalId);
    // }, 5000);

    socket.emit("raisehandroom", {
      name: name,
      room: "raisehand",
    });

    socket.on("handRaiseInfo", ({ handRaiseData }) => {
      // setHandsRaised(handRaiseSubmissions);
      setHands(handRaiseData);
      console.log(hands);
    });
  }, [hands]);
  return (
    <motion.div
      className={styles.container}
      style={{ backgroundColor: "#2C276B" }}
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transistion={{ duration: 3 }}
    >
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
              <button onClick={() => removeHand(i)}>✖</button>
            </li>
          </ul>
        ))}
      </section>
    </motion.div>
  );
}

export default SkHand;
