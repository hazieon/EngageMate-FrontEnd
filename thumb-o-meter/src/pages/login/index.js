import React from "react";
import LoginButton from "../../components/loginButton";
import styles from "./index.module.css";
import { Flex, Center, Box, Text, VStack, HStack } from "@chakra-ui/react";
import Subheading from "../../components/subheading";

function Login() {
  return (
    <Center className={styles.container}>
      <HStack>
        {" "}
        <img
          className={styles.myImg}
          src="/circleLogo.png"
          alt="EngageMate Logo"
        />
        <Box className={styles.logoBox}>
          <Text className={styles.heading}>EngageMate</Text>
          <Subheading
            className={styles.subheading}
            text={"Your real time remote learning companion"}
          ></Subheading>
        </Box>
        <LoginButton className={styles.myBtn} />
      </HStack>
    </Center>
  );
}

export default Login;

// className={styles.loginPage}
