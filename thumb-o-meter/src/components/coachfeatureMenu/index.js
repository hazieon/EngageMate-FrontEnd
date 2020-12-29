import React from "react";
import { Link } from "react-router-dom";
import FeatureIcon from "../featureIcons";

const CoachFeaturedMenu = () => {
  return (
    <div>
      <Link to="/thumb">
        <FeatureIcon alt="thumbometer" src="/thumb.png" />
      </Link>
      <Link to="/raiseHand">
        <FeatureIcon alt="raisehand" src="/raisehand.jpeg" />
      </Link>
      <Link to="/livequiz">
        <FeatureIcon alt="livequiz" src="/quizzical.jpeg" />
      </Link>
      <Link to="/deck">
        <FeatureIcon alt="deck" />
      </Link>
    </div>
  );
};

export default CoachFeaturedMenu;
