import React from "react";
import { Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./logout.module.css";
const LogoutButton = ({ bg, color }) => {
  const { logout } = useAuth0();

  return (
    <Button
      className={styles.btn}
      rightIcon={<FiLogOut />}
      colorScheme={bg}
      color={color}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
