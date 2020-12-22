import "../App/App.css";
import Login from "../Login/index";
import Logout from "../Logout"
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isAuthenticated} = useAuth0(); 
  
  return (
    <div className="App">
      <header className="App-header">
    {isAuthenticated ? <Logout/> : <Login />} 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
