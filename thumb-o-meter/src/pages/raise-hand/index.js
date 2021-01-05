import React from "react";
import NavBar from "../../components/navBar";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
const RaiseHand = () => {
  return (
    <div>
      <NavBar />
      <CustomButton
        link="/localhost3000"
        icon={<ArrowBackIcon />}
        text={"Back"}
      />
    </div>
  );
};

export default RaiseHand;
