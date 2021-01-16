import React from "react";
import NavBar from "../../components/navBar";
import PtHand from "../../components/ptHand";
import Title from "../../components/heading";
import useRoleContext from "../../context/roleContext";
import SkHand from "../../components/skHand";
import { Flex, Box, Center, Text } from "@chakra-ui/react";
import styles from "./index.module.css";

const RaiseHand = ({ bg, color }) => {
  const result = useRoleContext();
  const role = result[0];
  console.log(role);
  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
          <NavBar />
          <Center>
            <Text
              className={"player animate__animated animate__heartBeat"}
              style={{ textShadow: "0px 3px 3px#7f56f2" }}
            >
              {" "}
              <Title text="Raise Hand" />
            </Text>
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
