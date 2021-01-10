import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/login/index";
import Authorised from "../../pages/authorised/authorised";
import useSocketContext from "../../context/socketContext";
import { messageToast } from "../toastAlerts";

function App() {
  const { isAuthenticated } = useAuth0();
  const context = useSocketContext();
  const socket = context[0];

  useEffect(() => {
    socket.on("messageToAll", ({ message }) => {
      console.log("message alert");
      messageToast(message);
    });

    return () => socket.close();
  }, []);

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
