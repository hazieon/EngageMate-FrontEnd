import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../../pages/login/index";

function App() {
  return (
    // <Router>
    //   <div className={styles.app}>
    //     <Switch>
    //       {/* <Route path="/">
    //         <Login />
    //       </Route> */}
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <h1>Hello</h1>
      <Login />
    </div>
  );
}

export default App;
