import React from "react";

import Title from "../../components/heading";
import Header from "../../components/navBar";
import ParticipantFeatureMenu from "../../components/participantFeatureMenu";
import SpeakerFeatureMenu from "../../components/speakerFeatureMenu";
import Footer from "../../components/footer";
import "./index.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const FeaturedMenu = ({ role }) => {
  const { user } = useAuth0();

  return (
    <main>
      <Header />
      <Title text={`Nice to see you again ${user.given_name}`} />
      {role === "coach" ? <SpeakerFeatureMenu /> : <ParticipantFeatureMenu />}

      <Footer />
    </main>
  );
};

export default FeaturedMenu;
