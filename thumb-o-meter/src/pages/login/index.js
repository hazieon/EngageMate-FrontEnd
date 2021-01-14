import React from "react";
import LoginButton from "../../components/loginButton";
import styles from "./index.module.css";
import { Center, HStack } from "@chakra-ui/react";
import Subheading from "../../components/subheading";

function Login() {
  return (
    <Center className={styles.container}>
      <HStack>
        <img
          className={styles.img}
          src="/EngageMateImageTextDark.png"
          alt="EngageMate Logo"
        />
        <Subheading
          text={"Measures and Tracks Engagement In Real Time"}
        ></Subheading>
        <LoginButton />
      </HStack>
    </Center>
  );
}

export default Login;

// className={styles.loginPage}
