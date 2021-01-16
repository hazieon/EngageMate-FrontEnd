import React from "react";
import Player from "../../components/player";
import NavBar from "../../components/navBar";
import Spotify from "../../components/spotify";
import Title from "../../components/heading";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Text } from "@chakra-ui/react";

import style from "./deck.module.css";

const art = new Audio("art-attack.mp3");
const recap = new Audio("debussy.mp3");
const breakout1 = new Audio("get-in-pair.mp3");
const breakout2 = new Audio("off-to-the-breakout-rooms.mp3");
const changes = new Audio("get-your-changes-in.mp3");
const hackathon = new Audio("hackathon-fridays.mp3");
const immutable = new Audio("immutable.mp3");
const waving = new Audio("waving.mp3");
const chris = new Audio("chris.m4a");
const engaged = new Audio("engaged.m4a");
const Deck = ({ bg, color }) => {
  return (
    <Box bg={bg} color={color}>
      <NavBar />

      <div className={style.container}>
        <Center className={style.heading}>
          {" "}
          <Text
            className={"player animate__animated animate__heartBeat"}
            style={{ textShadow: "0px 3px 3px#7f56f2" }}
          >
            <Title
              className={"player animate__animated animate__heartBeat"}
              text="DJ Deck"
            />
          </Text>
        </Center>
        <Center>
          <Link to="/">
            <Button
              colorScheme={color}
              _hover={{
                background: "white",
                color: "#2C276B",
              }}
              variant="outline"
            >
              <ArrowBackIcon /> Back
            </Button>
          </Link>
        </Center>
        <div className={style.players}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            {" "}
            <div className={style.player}>
              <p>Engaged 1 </p>
              <Player file={engaged} />
            </div>
            <div className={style.player}>
              <p>Engaged 2 </p>
              <Player file={chris} />
            </div>
            <div className={style.player}>
              <p>Breakout Room 1 </p>
              <Player file={breakout1} />
            </div>
            <div className={style.player}>
              <p>Breakout Room 2 </p>
              <Player file={breakout2} />
            </div>
            <div className={style.player}>
              <p>Art Attack </p>
              <Player file={art} />
            </div>
            <div className={style.player}>
              <p>Recap Quiz </p>
              <Player file={recap} />
            </div>
            <div className={style.player}>
              <p>Changes </p>
              <Player file={changes} />
            </div>
            <div className={style.player}>
              <p>Hackathon </p>
              <Player file={hackathon} />
            </div>
            <div className={style.player}>
              <p>Immutable</p>
              <Player file={immutable} />
            </div>
            <div className={style.player}>
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
    </Box>
  );
};

export default Deck;
