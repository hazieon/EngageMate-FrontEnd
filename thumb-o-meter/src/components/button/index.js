import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomButton = ({ link, text, icon }) => {
  return (
    <Link to={link}>
      <Button style={{ color: "black" }} leftIcon={icon}>
        {text}
      </Button>
    </Link>
  );
};

export default CustomButton;
