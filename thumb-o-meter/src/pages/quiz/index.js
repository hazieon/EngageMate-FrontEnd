import React from "react";
import NavBar from "../../components/navBar";
import PtPoll from "../../components/ptPoll";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import SkPoll from "../../components/skPoll";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import styles from "./index.module.css";
import { forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
const Quiz = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("white", "white");
  const result = useRoleContext();
  const role = result[0];
  console.log(role);
  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color}>
        <NavBar />
        <Box h="100vh" d="flex" justifyContent="center">
          <main>
            <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
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
