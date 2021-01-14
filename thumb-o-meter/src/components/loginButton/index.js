import { Flex, Box, Heading, Button, VStack, Center } from "@chakra-ui/react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./index.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={styles.loginButton}
      variant="ghost"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
