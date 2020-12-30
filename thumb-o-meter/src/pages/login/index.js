import React from "react";
import LoginButton from "../../components/loginButton";
import styles from "./index.module.css";
import { Image, Box, Text, Center, StylesProvider } from "@chakra-ui/react";

function Login() {
  return (
    <Box>
      <Center>
        <Box flexShrink={0}>
          <main>
            <LoginButton />
          </main>
        </Box>
      </Center>
    </Box>
  );
}

export default Login;

// className={styles.loginPage}
