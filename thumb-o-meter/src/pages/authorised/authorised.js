import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturedMenu from "../../pages/featureMenu";
import Unauthorised from "../unauthorised";

import useRoleContext from "../../context/roleContext";
const envUrl = process.env.REACT_APP_url;
const Authorised = () => {
  const data = useRoleContext();
  const role = data[0];
  const setRole = data[1];
  const setLoggedUser = data[3];
  // const loggedUser = data[2];

  // console.log(myRole[2]);
  // const [role, setRole] = useState("");

  const { user } = useAuth0();
  console.log(user);
  // const [loggedUser, setLoggedUser] = useState(user);

  let url =
    process.env.REACT_APP_BACKEND_URL || `${envUrl}/users/${user.email}`;

  useEffect(() => {
    async function getUsers() {
      setLoggedUser(user);
      const data = await fetch(url);
      const result = await data.json();
      console.log(result.success);
      result.success === false
        ? setRole("unauthorised")
        : setRole(result.data.role);
      console.log(role);
    }

    getUsers();

    //loggedUser is the Auth0 information
  }, []);
  return (
    <div>
      {role === "unauthorised" ? (
        <Unauthorised />
      ) : (
        <FeaturedMenu role={role} />
      )}
    </div>
  );
};

export default Authorised;
