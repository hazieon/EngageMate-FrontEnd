import React from "react";
import NavBar from "../../components/navBar";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Hand from "../../components/hand";
const RaiseHand = () => {
  return (
    <div>
      <NavBar />
      <Hand />
      <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
    </div>
  );
};

export default RaiseHand;
