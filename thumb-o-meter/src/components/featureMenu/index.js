import React from "react";

import { VStack } from "@chakra-ui/react";
import FeatureIcon from "../featureIcons";
import "./featureMenu.module.css";

const FeaturedMenu = () => {
  return (
    <VStack spacing={10} align="center" bg="white">
      <FeatureIcon
        alt="thumbometer"
        src="/thumb.png"
        link="/thumb"
        heading="Thumb-o-meter"
        subheading="Hows it going?"
      />
      <FeatureIcon
        alt="raisehand"
        src="/raisehand.jpeg"
        link="/raisehand"
        heading="Raise a Hand"
        subheading="Got a question?"
      />
      <FeatureIcon
        alt="livequiz"
        src="/quizzical.jpeg"
        link="/livequiz"
        heading="Live Quiz"
        subheading="How much do you understand?"
      />
    </VStack>
  );
};

export default FeaturedMenu;
