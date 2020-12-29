import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/login/index";

function App() {
  console.log("app component called");

  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
