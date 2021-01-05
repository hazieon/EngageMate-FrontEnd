import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../logout/index";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ThemeToggler from "../theme";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import styles from "./navBar.module.css";

const MenuItems = ({ children }) => (
  <Text className={styles.menu}>{children}</Text>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const bg = useColorModeValue("#7f56f2", "#110042");
  const color = useColorModeValue("#110042", "white");
  const result = useRoleContext();
  const role = result[0];
  return (
    <Flex className={styles.container} as="nav" bg={bg} color={color}>
      {/* <Icon as={FaCat} /> */}
      <ThemeToggler />
      <Box className={styles.icon} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        className={styles.box}
        display={{ base: show ? "block" : "none", md: "block" }}
      >
        <Flex className={styles.navigation}>
          <MenuItems>
            <Link to="/">Home</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/thumb">Thumb-o-meter</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/raisehand">Raise Hand</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/quiz">Live Quiz</Link>
          </MenuItems>
          {role === "coach" && (
            <>
              <MenuItems>
                <Link to="/deck">DJ Deck</Link>
              </MenuItems>
              <MenuItems>
                <Link to="/admin">Admin</Link>
              </MenuItems>
            </>
          )}
          <LogoutButton bg={bg} color={color} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
