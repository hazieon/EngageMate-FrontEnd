import React from "react";
import NavBar from "../../components/navBar";
import PtPoll from "../../components/ptPoll";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import SkPoll from "../../components/skPoll";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import styles from "./index.module.css";

const Quiz = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("white", "white");
  const result = useRoleContext();
  const role = result[0];
  console.log(role);
  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
          <NavBar />
          <Center>
            <h1 className={styles.heading}>Live Poll</h1>
          </Center>
          <Center className={styles.backButton}>
            <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
          </Center>
          <Center>
            {role === "coach" && <SkPoll />}
            {role === "bootcamper" && <PtPoll />}
          </Center>
        </main>
      </Box>
    </Flex>
  );
};

export default Quiz;
