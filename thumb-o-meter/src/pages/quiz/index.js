import React from "react";
import NavBar from "../../components/navBar";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Quiz = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
    </div>
  );
};

export default Quiz;
