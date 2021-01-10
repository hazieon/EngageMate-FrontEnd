import React from "react";
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
    <div>
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
    </div>
  );
};

export default Player;
