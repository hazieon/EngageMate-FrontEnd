import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

import Hand from "../hand";

function SkHand({ usersList, handUsers }) {
  //when hand is raised, server adds them to a list of raised hands - name, pic
  const [users, setUsers] = useState();
  const [hands, setHands] = useState([]);

  function handRaises() {
    //set the state to be the array list of users that was passed in
    // setHands(handUsers);
    setHands([{ name: "carl" }, { name: "becky" }, { name: "kunmi" }]);
  }

  function removeHand(index) {
    // immutably remove individual hand raise
    setHands([...hands.slice(0, index), ...hands.slice(index + 1)]);
    //send a message to back end sockets to remove that user
  }

  useEffect(() => {
    handRaises();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.notifySpot}>
        <p className={hands.length > 0 ? styles.notify : styles.noNotify}>
          {hands.length}
        </p>
      </div>
      <Hand />

      {/* renders a box section which contains the ordered list of users with raised hands */}
      <section className={styles.handsList}>
        {hands.map((h, i) => (
          <ul>
            <li className={styles.handRaise}>
              {hands[i].name}
              <button onClick={() => removeHand(i)}>✖</button>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}

export default SkHand;
