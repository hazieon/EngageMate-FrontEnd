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
    `http://localhost:5000/users/${loggedUser.email}`;
  useEffect(() => {
    async function getUsers() {
      setLoggedUser(user);
      const res = await fetch(url);
      const result = await res.json();
      setRole(result.data.role);
      // const userRole = data.map((item) => item.role);
      //const userEmail = data.map((item) => item.email);
      // userEmail.includes(loggedUser.email) ? setRole() : setRole("guest");
    }

    getUsers();

    //loggedUser is the Auth0 information
  }, [loggedUser, role, user, url]);
  console.log(role);
  return (
    <div>
      <Route path="/">
        {isAuthenticated ? <FeaturedMenu role={role} /> : <Login />}
      </Route>
    </div>
  );
};

export default Authorised;
