import React, { useState } from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import LogoutButton from "../logout/index";
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Logo Here
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        mr={5}
        onClick={handleToggle}
      >
        <HamburgerIcon />
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Thumb-o-meter</MenuItems>
        <MenuItems>Raise Hand</MenuItems>
        <MenuItems>Live Quiz</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Box bg="transparent" border="1px" p={2} borderRadius="lg">
          <LogoutButton />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
