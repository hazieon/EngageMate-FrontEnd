import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/login/index";
import Admin from "../../pages/admin";
import Menu from "../../pages/featureMenu";
import Thumb from "../../pages/thumb-o-meter";

function App() {
  console.log("app component called");

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
            <Route path="/">
              <Login />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
