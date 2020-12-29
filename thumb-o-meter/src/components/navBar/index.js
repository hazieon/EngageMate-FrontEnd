import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Icon, IconButton } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import LogoutButton from "../logout/index";
import styles from "./navBar.module.css";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/menu">
        <IconButton
          isRound="true"
          colorScheme="teal"
          aria-label="button"
          icon={<Icon as={FiHome} />}
        />
      </Link>
      <Link to="/logout">
        <LogoutButton />
      </Link>
    </nav>
  );
}
export default NavBar;
