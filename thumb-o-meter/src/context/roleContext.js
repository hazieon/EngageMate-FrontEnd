import React, { useState, createContext, useContext, useEffect } from "react";

const RoleContext = createContext(undefined);

export function RoleProvider({ children }) {
  const [role, setRole] = useState("");

  const [loggedUser, setLoggedUser] = useState("");

  function myRole(string) {
    setRole(string);
  }
  function myUser(obj) {
    setLoggedUser(obj);
  }

  return (
    <RoleContext.Provider value={[role, myRole, loggedUser, myUser]}>
      {children}
    </RoleContext.Provider>
  );
}

export default function useRoleContext() {
  return useContext(RoleContext);
}
