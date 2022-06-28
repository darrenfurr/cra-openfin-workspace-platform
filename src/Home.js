import logo from "./logo.svg";
import "./App.css";
import { useEffect, useCallback } from "react";
import { Home as WorkspaceHome } from "@openfin/workspace";
import { register } from "@openfin/workspace/notifications";

function Home() {
  const initialize = useCallback(async () => {
    try {
      console.log("register Home...");
      await WorkspaceHome.register({
        title: `Demo Workspace`,
        id: "demo-workspace",
        icon: "https://openfin.co/favicon-32x32.png",
        onUserInput: () => null,
        onResultDispatch: () => null,
      });

      await register({
        id: "notification-provider",
        title: "Demo Workspace",
        icon: "https://openfin.co/favicon-32x32.png",
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A check for authentication would go here...</p>
      </header>
    </div>
  );
}

export default Home;
