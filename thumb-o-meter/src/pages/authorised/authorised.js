import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturedMenu from "../../pages/featureMenu";
import Login from "../../pages/login/index";

const Authorised = () => {
  const [role, setRole] = useState("");

  const { isAuthenticated, user } = useAuth0();
  const [loggedUser, setLoggedUser] = useState(user);

  console.log(loggedUser);
  let url =
    process.env.REACT_APP_BACKEND_URL ||
    `https://callback-cats.herokuapp.com/users/${loggedUser.email}`;

  useEffect(() => {
    async function getUsers() {
      setLoggedUser(user);
      const data = await fetch(url);
      const result = await data.json();
      result.data === undefined ? setRole("guest") : setRole(result.data.role);
    }

    getUsers();

    //loggedUser is the Auth0 information
  }, [loggedUser, role, user, url]);
  return (
    <div>
      <Route path="/">
        {isAuthenticated ? <FeaturedMenu role={role} /> : <Login />}
      </Route>
    </div>
  );
};

export default Authorised;
