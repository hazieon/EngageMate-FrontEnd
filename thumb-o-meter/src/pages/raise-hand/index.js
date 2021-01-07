import React from "react";
import NavBar from "../../components/navBar";
import PtHand from "../../components/ptHand";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import SkHand from "../../components/skHand";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import styles from "./index.module.css";

const RaiseHand = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("white", "white");
  const result = useRoleContext();
  const role = result[0];

  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
          <NavBar />
          <Center>
            <h1 className={styles.heading}>Raise Hand</h1>
          </Center>
          <Center className={styles.backButton}>
            <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
          </Center>
          <Center>
            {role !== "bootcamper" && <SkHand />}
            {role === "bootcamper" && <PtHand />}
          </Center>
        </main>
      </Box>
    </Flex>
  );
};

export default RaiseHand;
