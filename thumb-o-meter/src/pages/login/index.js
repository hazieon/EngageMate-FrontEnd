import React from "react";
import LoginButton from "../../components/loginButton";
import styles from "./index.module.css";
import { Center } from "@chakra-ui/react";

function Login() {
  return (
    <Center className={styles.container}>
      <LoginButton />
    </Center>
  );
}

export default Login;

// className={styles.loginPage}
