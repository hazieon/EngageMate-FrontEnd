import { useAuth0 } from "@auth0/auth0-react";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/login/index";
import Authorised from "../../pages/authorised/authorised";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/">{isAuthenticated ? <Authorised /> : <Login />}</Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
