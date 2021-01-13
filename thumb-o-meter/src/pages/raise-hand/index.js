import React from "react";
import NavBar from "../../components/navBar";
import PtHand from "../../components/ptHand";

import useRoleContext from "../../context/roleContext";
import SkHand from "../../components/skHand";
import { Flex, Box, Center, useColorModeValue, Text } from "@chakra-ui/react";
import styles from "./index.module.css";

const RaiseHand = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const result = useRoleContext();
  const role = result[0];
  console.log(role);
  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
          <NavBar />
          <Center>
            <Text className={styles.heading}>Raise Hand</Text>
          </Center>
          {/* <Center className={styles.backButton}>
            <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
          </Center> */}
          <Center>
            {role === "coach" && <SkHand />}
            {role === "bootcamper" && <PtHand />}
          </Center>
        </main>
      </Box>
    </Flex>
  );
};

export default RaiseHand;
