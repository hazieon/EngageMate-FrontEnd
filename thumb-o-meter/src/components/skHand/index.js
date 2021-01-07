import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Hand from "../hand";

function SkHand({ usersList, handUsers }) {
  //when hand is raised, server adds them to a list of raised hands - name, pic
  const [users, setUsers] = useState();
  const [hands, setHands] = useState([]);
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("white", "white");

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
    <div>
      <Flex>
        <Box className={styles.container} bg={bg} color={color}>
          <Center>
            <h1 className={styles.heading}>Raised Hands</h1>
          </Center>
          <Center>
            <p className={styles.notify}>{hands.length}</p>
            <Hand />
          </Center>
          <Box className={styles.container} bg={bg} color={color}>
            <Center>
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
            </Center>
          </Box>
          <Center className={styles.backButton}>
            <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default SkHand;
