import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturedMenu from "../../pages/featureMenu";
import Login from "../../pages/login/index";
import Unauthorised from "../unauthorised";

import useRoleContext from "../../context/roleContext";
const envUrl = process.env.REACT_APP_url;
const Authorised = () => {
  const data = useRoleContext();
  const role = data[2];
  const setRole = data[3];
  const loggedUser = data[1];

  // console.log(myRole[2]);
  // const [role, setRole] = useState("");

  const { isAuthenticated, user } = useAuth0();
  console.log(user);
  // const [loggedUser, setLoggedUser] = useState(user);
  function unauthorised() {
    // Popup with message to contact administrator redirect to login
    // create a landing page for unauthorised users
    <Login />;

    /* <Redirect to="/unauthorised" />; */
  }
  let url =
    process.env.REACT_APP_BACKEND_URL || `${envUrl}/users/${user.email}`;

  useEffect(() => {
    async function getUsers() {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result.success);
      result.success === false ? (
        <Redirect to="/unauthorised" />
      ) : (
        setRole(result.data.role)
      );
      console.log(role);
    }

    getUsers();

    //loggedUser is the Auth0 information
  }, []);
  return (
    <div>
      <Route path="/">
        {isAuthenticated && role !== "" ? (
          <FeaturedMenu role={role} />
        ) : (
          <Unauthorised />
        )}
      </Route>
    </div>
  );
};

export default Authorised;
