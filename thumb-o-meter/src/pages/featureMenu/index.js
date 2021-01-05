import React from "react";
import Title from "../../components/heading";
import Header from "../../components/navBar";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import "./index.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";
const FeaturedMenu = () => {
  const { user } = useAuth0();
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const data = useRoleContext();
  const role = data[0];
  return (
    <Box bg={bg} color={color}>
      <Header role={role} bg={bg} color={color} />
      <Title text="Nice to see you again" user={user} />
      <Menu role={role} />
      <Footer role={role} bg={bg} color={color} />
    </Box>
  );
};

export default FeaturedMenu;
