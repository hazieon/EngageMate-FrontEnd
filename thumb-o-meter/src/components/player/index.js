import React, { useState } from "react";
import ReactHowler from "react-howler";
import styles from "./player.module.css";

const Player = ({ file }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div className={styles.subheading}>
      <ReactHowler src={file} playing={playing} mute={false} />
      <button onClick={handlePlay}> Play </button>{" "}
      <button onClick={handlePause}> Pause </button>{" "}
      <button onClick={() => window.location.reload(false)}>Reset</button>
    </div>
  );
};

export default Player;
