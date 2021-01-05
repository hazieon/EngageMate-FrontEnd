import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RoleContext = createContext(undefined);

export function RoleProvider({ children }) {
  const [role, setRole] = useState("");
  //const { user } = useAuth0();
  const [loggedUser, setLoggedUser] = useState("");
  //const [result, setResult] = useState("");
  function myRole(string) {
    setRole(string);
  }
  function myUser(obj) {
    setLoggedUser(obj);
  }
  // useEffect(() => {
  //   async function getUsers() {
  //     // setLoggedUser(user);
  //     const data = await fetch(
  //       `https://callback-cats.herokuapp.com/users`
  //     );
  //     const response = await data.json();
  //     setResult(response);
  //   }
  //   getUsers();

  //   //loggedUser is the Auth0 information
  // }, []);

  return (
    <RoleContext.Provider value={[role, myRole, loggedUser, myUser]}>
      {children}
    </RoleContext.Provider>
  );
}

export default function useRoleContext() {
  return useContext(RoleContext);
}
