import React from "react";
import NavBar from "../../components/navBar";
import PtPoll from "../../components/ptPoll";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import SkPoll from "../../components/skPoll";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import styles from "./index.module.css";
import { Box, forwardRef } from "@chakra-ui/react";
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
    <NavBar />
      <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
      <Box h="100vh" d="flex" alignItems="center" justifyContent="center">
        <MotionBox
          as="aside"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
          padding="2"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          width="12"
          height="12"
          display="flex"
        />
      </Box>
      <Box className={styles.container} bg={bg} color={color}>
        <main>
       
          <Center>
            {role === "coach" && <SkPoll />}
            {role === "bootcamper" && <PtPoll />}
          </Center>
        </main>
      </Box>
    </Flex>
    <div>
    </div>
  );
};

export default Quiz;
