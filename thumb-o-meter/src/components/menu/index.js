import React from "react";
import { Button, Center, VStack } from "@chakra-ui/react";
import FeatureIcon from "../featureIcons";

import {
  FaQuestionCircle,
  FaMusic,
  FaHandPaper,
  FaThumbsUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = ({ role }) => {
  return (
    <VStack>
      <FeatureIcon
        alt="thumbometer"
        src="/thumb.png"
        link="/thumb"
        icon={FaThumbsUp}
        heading="Thumb-o-meter"
        subheading="Hows it going?"
      />
      <FeatureIcon
        alt="raisehand"
        src="/raisehand.png"
        link="/raisehand"
        icon={FaHandPaper}
        heading="Raise a Hand"
        subheading="Got a question?"
      />
      <FeatureIcon
        alt="livequiz"
        src="/quizzical.png"
        link="/quiz"
        icon={FaQuestionCircle}
        heading="Live Quiz"
        subheading="How much do you understand?"
      />
      {role === "coach" && (
        <>
          <FeatureIcon
            alt="djDeck"
            src="/music.png"
            link="/deck"
            icon={FaMusic}
            heading="DJ Deck"
            subheading="A little bit of music you say?"
          />
          <Center>
            {" "}
            <Button>
              <Link to="/admin">Admin</Link>
            </Button>{" "}
          </Center>
        </>
      )}
    </VStack>
  );
};

export default Menu;
