import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RoleContext = createContext("");

export function RoleProvider({ children }) {
  const [role, setRole] = useState("");
  const { user } = useAuth0();
  const [loggedUser, setLoggedUser] = useState(user);

  useEffect(() => {
    async function getUsers() {
      setLoggedUser(user);
      const data = await fetch(
        `https://callback-cats.herokuapp.com/users/${loggedUser.email}`
      );
      const result = await data.json();
      result.data === undefined ? setRole("guest") : setRole(result.data.role);
    }
    getUsers();
    //loggedUser is the Auth0 information
  }, [loggedUser, role, user]);

  return <RoleContext.Provider value={role}>{children}</RoleContext.Provider>;
}

export default function useRoleContext() {
  return useContext(RoleContext);
}
