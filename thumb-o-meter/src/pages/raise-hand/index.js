import React from "react";
import NavBar from "../../components/navBar";
import PtHand from "../../components/ptHand";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RaiseHand = () => {
  return (
    <div>
      <NavBar />
      <PtHand />
      <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
    </div>
  );
};

export default RaiseHand;
