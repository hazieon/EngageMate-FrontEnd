import React, { useEffect } from "react";
import Title from "../../components/heading";
import Header from "../../components/navBar";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import "./index.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import useSocketContext from "../../context/socketContext";

const FeaturedMenu = () => {
  const data = useSocketContext();
  const socket = data[0];

  const { user } = useAuth0();
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");

  useEffect(() => {
    socket.emit("connection");

    //return () => socket.disconnect();
  }, []);

  return (
    <Box bg={bg} color={color}>
      <Header bg={bg} color={color} />
      <Title text="Welcome to " logo="EngageMate" user={user.given_name} />
      <Menu bg={bg} color={color} />
      <Footer bg={bg} color={color} />
    </Box>
  );
};

export default FeaturedMenu;
