import React from "react";
import { Heading } from "@chakra-ui/react";
import styles from "./heading.module.css";

const Title = ({ text, user, logo, heading }) => {
  return (
    <Heading className={styles.container}>
      {text}
      <span className={styles.heading}>{logo}</span> {user}
    </Heading>
  );
};

export default Title;
