import React from "react";
import { Heading } from "@chakra-ui/react";
import styles from "./heading.module.css";

const Title = ({ text, user }) => {
  return (
    <Heading className={styles.container}>
      {text} {user.given_name}
    </Heading>
  );
};

export default Title;
