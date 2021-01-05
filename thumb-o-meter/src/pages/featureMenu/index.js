import React from "react";
import Title from "../../components/heading";
import Header from "../../components/navBar";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import "./index.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const FeaturedMenu = () => {
  const { user } = useAuth0();
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");

  return (
    <Box bg={bg} color={color}>
      <Header bg={bg} color={color} />
      <Title text="Nice to see you again" user={user} />
      <Menu />
      <Footer bg={bg} color={color} />
    </Box>
  );
};

export default FeaturedMenu;
