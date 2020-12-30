import { useAuth0 } from "@auth0/auth0-react";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/login/index";
import LogoutButton from "../logout";
import Admin from "../../pages/admin";
import Menu from "../../pages/featureMenu";
import Thumb from "../../pages/thumb-o-meter";
import Results from "../results/index";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/thumb">
            <Thumb />
          </Route>
          <Route path="/">
            {isAuthenticated ? <LogoutButton /> : <Login />}
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
