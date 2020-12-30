import React from "react";
import NavBar from "../../components/navBar";
import Title from "../../components/heading";
import Header from "../../components/navBar/Header";
import FeatureMenu from "../../components/featureMenu";
import CoachFeatureMenu from "../../components/coachfeatureMenu";
import Footer from "../../components/footer";
import "./index.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const FeaturedMenu = () => {
  const { user } = useAuth0();
  const coach = "kumswilliams@gmail.com";
  return (
    <main>
      <Header />
      <Title text={`Nice to see you again ${user.given_name}`} />
      {coach === "gumswilliams@gmail.com" ? (
        <CoachFeatureMenu />
      ) : (
        <FeatureMenu />
      )}
      <Footer />
    </main>
  );
};

export default FeaturedMenu;
