import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FeaturedMenu from "../../pages/featureMenu";
import Unauthorised from "../unauthorised";
import useRoleContext from "../../context/roleContext";
import { config } from "../../config";
import { useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "../../pages/admin";
import Quiz from "../../pages/quiz";
import Deck from "../../pages/dj-deck";
import Thumbometer from "../thumb-o-meter";

// import PtHand from "../ptHand";
// import SkHand from "../skHand";

import RaiseHand from "../../pages/raise-hand";

const envUrl = config.url;
const Authorised = () => {
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
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

  let url = `${envUrl}/users/${user.email}`;

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
    <>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/unauthorised">
            <Unauthorised />
          </Route>
          <Route path="/raisehand">
            <RaiseHand bg={bg} color={color} />
          </Route>
          <Route path="/quiz">
            <Quiz bg={bg} color={color} />
          </Route>
          <Route path="/deck">
            <Deck bg={bg} color={color} />
          </Route>
          <Route path="/thumb">
            <Thumbometer />
          </Route>
          <Route exact path="/">
            {role === "unauthorised" ? (
              <Unauthorised />
            ) : (
              <FeaturedMenu role={role} />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Authorised;
