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
        <main>
          <NavBar />
          <Center>
            <Text className={"player animate__animated animate__heartBeat"}>
              {" "}
              <Title text="Live Quiz" />
            </Text>
          </Center>
          <Box h="100vh" d="flex" justifyContent="center">
            <main>
              <Center>
                {role === "coach" && <SkPoll />}
                {role === "bootcamper" && <PtPoll />}
              </Center>
            </main>
          </Box>
        </main>
      </Box>
    </Flex>
  );
};

export default Quiz;
