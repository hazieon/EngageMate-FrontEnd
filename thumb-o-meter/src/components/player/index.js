import React from "react";
import { motion } from "framer-motion";
import { animationOne, animationTwo } from "../../animations";
import {
  FaPlay,
  FaPlayCircle,
  FaPause,
  FaPauseCircle,
  FaStop,
  FaStopCircle,
} from "react-icons/fa";

import styles from "./player.module.css";

const Player = ({ file }) => {
  const handlePlay = () => {
    file.play();
  };
  const handlePause = () => {
    file.pause();
  };

  const handleStop = () => {
    file.pause();
    file.currentTime = 0;
  };
  return (
    <motion.div
      className={styles.container}
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transistion={{ duration: 3 }}
    >
      <button onClick={() => handlePlay()}>
        {" "}
        <FaPlayCircle />{" "}
      </button>{" "}
      <button onClick={() => handlePause()}>
        {" "}
        <FaPauseCircle />{" "}
      </button>{" "}
      <button onClick={() => handleStop()}>
        {" "}
        <FaStopCircle />{" "}
      </button>{" "}
    </motion.div>
  );
};

export default Player;
