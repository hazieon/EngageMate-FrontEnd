import React from "react";
import Player from "../../components/player";
import NavBar from "../../components/navBar";
import Spotify from "../../components/spotify";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";

import styles from "./deck.module.css";

const art = new Audio("art-attack.mp3");
const recap = new Audio("debussy.mp3");
const breakout1 = new Audio("get-in-pair.mp3");
const breakout2 = new Audio("off-to-the-breakout-rooms.mp3");
const changes = new Audio("get-your-changes-in.mp3");
const hackathon = new Audio("hackathon-fridays.mp3");
const immutable = new Audio("immutable.mp3");
const waving = new Audio("waving.mp3");
const Deck = () => {
  return (
    <>
      <NavBar />
      <div>
        <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
      </div>
      <div className={styles.container}>
        <div className={styles.players}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.player}>
              <p>Breakout Room 1 </p>
              <Player file={breakout1} />
            </div>

            <div className={styles.player}>
              <p>Breakout Room 2 </p>
              <Player file={breakout2} />
            </div>
            <div className={styles.player}>
              <p>Art Attack </p>
              <Player file={art} />
            </div>
            <div className={styles.player}>
              <p>Recap Quiz </p>
              <Player file={recap} />
            </div>
            <div className={styles.player}>
              <p>Changes </p>
              <Player file={changes} />
            </div>
            <div className={styles.player}>
              <p>Hackathon </p>
              <Player file={hackathon} />
            </div>
            <div className={styles.player}>
              <p>Immutable</p>
              <Player file={immutable} />
            </div>
            <div className={styles.player}>
              <p>Goodbye </p>
              <Player file={waving} />
            </div>
          </section>

          <section>
            {" "}
            <Spotify />
          </section>
        </div>
      </div>
    </>
  );
};

export default Deck;
