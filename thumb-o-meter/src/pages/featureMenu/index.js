import React from "react";
import NavBar from "../../components/navBar";
import FeatureMenu from "../../components/featureMenu";
import CoachFeatureMenu from "../../components/coachfeatureMenu";

const FeaturedMenu = () => {
  const coach = "kumswilliams@gmail.com";
  return (
    <main>
      <NavBar />
      {coach === "gumswilliams@gmail.com" ? (
        <CoachFeatureMenu />
      ) : (
        <FeatureMenu />
      )}
    </main>
  );
};

export default FeaturedMenu;
