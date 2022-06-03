import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A check for authentication would go here...</p>
        <Link
          className="App-link"
          to={{
            pathname: "/provider",
            state: {
              user: true,
            },
          }}
        >
          Initialize OpenFin Workspace
        </Link>
      </header>
    </div>
  );
}

export default Home;
