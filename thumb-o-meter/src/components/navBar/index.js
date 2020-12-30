import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Icon, IconButton, Flex, Spacer, Box } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import LogoutButton from "../logout/index";

function NavBar() {
  const { user } = useAuth0();
  return (
    <Flex>
      <Box p="2">
        <Link to="/">
          <IconButton
            isRound="true"
            colorScheme="teal"
            aria-label="button"
            icon={<Icon as={FiHome} />}
          />
        </Link>
      </Box>
      <Spacer />
      <Box justify="center" align="center" p="2">
        Nice to see you again {user.given_name}
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="/logout">
          <LogoutButton />
        </Link>
      </Box>
    </Flex>
  );
}
export default NavBar;
