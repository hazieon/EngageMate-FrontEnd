import React from "react";
import Player from "../../components/player";
import NavBar from "../../components/navBar";
import FeatureIcon from "../../components/featureIcons";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";

import styles from "./deck.module.css";
const Deck = ({ user }) => {
  return (
    <>
      <NavBar />
      <div>
        <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
      </div>
      <div className={styles.container}>
        <header className={styles.title}> </header>
        <div className={styles.players}>
          <section>
            <h1>Breakout Room 1 </h1>
            <Player file={"/get-in-pair.mp3"} />
          </section>
          <section>
            <h1>Breakout Room 2</h1>
            <Player file={"/off-to-the-breakout-rooms.mp3"} />
          </section>
          <section>
            <h1>Immutable</h1>

            <Player file={"/immutable.mp3"} />
          </section>
          <section>
            <h1>Hackathon Friday</h1>

            <Player file={"/hackathon-fridays.mp3"} />
          </section>
          <section>
            <h1>Waving</h1>

            <Player file={"/waving.mp3"} />
          </section>
          <section>
            <h1>Changes</h1>

            <Player file={"/get-your-changes-in.mp3"} />
          </section>
          <section>
            <h1>Recap</h1>

            <Player file={"/debussy.mp3"} />
          </section>
          <section>
            <h1>Art Attack</h1>

            <Player file={"/art-attack.mp3"} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Deck;
