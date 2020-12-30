import { Image, Box, Text, Center } from "@chakra-ui/react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./index.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.loginButton}>
      <Center>
        <Box flexShrink={0}>
          <button onClick={() => loginWithRedirect()}>
            <p className={styles.text}>Log In</p>
          </button>
        </Box>
      </Center>
    </div>
  );
};

export default LoginButton;
