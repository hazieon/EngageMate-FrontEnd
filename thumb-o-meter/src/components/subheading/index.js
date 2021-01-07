import React from "react";
import styles from "./subheading.module.css";

function Subheading({ text }) {
  return <h2 className={styles.subheading}>{text}</h2>;
}

export default Subheading;
