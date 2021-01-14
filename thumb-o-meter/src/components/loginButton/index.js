import { Flex, Box, Heading, Button, VStack, Center } from "@chakra-ui/react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./index.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Flex>
      <Box className={styles.container}>
        <VStack>
          <Box className={styles.box}></Box>
          <Center className={styles.loginButton}>
            <Button variant="ghost" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          </Center>
        </VStack>{" "}
      </Box>
    </Flex>
  );
};

export default LoginButton;
