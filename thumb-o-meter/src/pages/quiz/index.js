import React from "react";
import NavBar from "../../components/navBar";
import CustomButton from "../../components/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SkPoll from "../../components/skPoll";

const Quiz = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <CustomButton link="/" icon={<ArrowBackIcon />} text={"Back"} />
      <SkPoll />
    </div>
  );
};

export default Quiz;
