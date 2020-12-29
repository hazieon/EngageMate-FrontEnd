import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Icon, IconButton } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import LogoutButton from "../logout/index";

function NavBar() {
  return (
    <Router>
      <nav>
        <Link to="/featuremenu">
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
    </Router>
  );
}
export default NavBar;
