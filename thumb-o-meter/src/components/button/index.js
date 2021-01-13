import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomButton = ({ link, text, icon, onClick, myClass }) => {
  return (
    <Link to={link}>
      <Button leftIcon={icon} onClick={onClick} className={myClass}>
        {text}
      </Button>
    </Link>
  );
};

export default CustomButton;
