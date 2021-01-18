import React from "react";
import NavBar from "../../components/navBar";
import PtPoll from "../../components/ptPoll";
import useRoleContext from "../../context/roleContext";
import SkPoll from "../../components/skPoll";
import { Flex, Box, Center, Text } from "@chakra-ui/react";
import styles from "./index.module.css";
import Title from "../../components/heading";

const Quiz = ({ bg, color }) => {
  const result = useRoleContext();
  const role = result[0];
  console.log(role);
  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <NavBar />
        <Center>
          <Text
            className={"player animate__animated animate__heartBeat"}
            style={{ textShadow: "0px 3px 3px#7f56f2" }}
          >
            {" "}
            <Title text="Live Quiz" />
          </Text>
        </Center>
        <Box>
          <main>
            <Center>
              {role === "coach" && <SkPoll />}
              {role === "bootcamper" && <PtPoll />}
            </Center>
          </main>
        </Box>
      </Box>
    </Flex>
  );
};

export default Quiz;
