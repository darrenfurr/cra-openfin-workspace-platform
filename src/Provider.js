import { useCallback, useEffect, useRef } from "react";
import * as WorkspacePlatform from "@openfin/workspace-platform";
import { Home } from "@openfin/workspace";
import { useLocation } from "react-router-dom";

function Provider() {
  const location = useLocation();
  const initializing = useRef();

  const initialize = useCallback(async () => {
    const { user } = location.state;
    if (!user || initializing.current) {
      return;
    }

    try {
      console.log("initializing platform...");
      initializing.current = true;
      await WorkspacePlatform.init({
        browser: {},
      });

      console.log("register Home...");
      await Home.register({
        title: `Demo Workspace`,
        id: "demo-workspace",
        icon: "https://openfin.co/favicon-32x32.png",
        onUserInput: () => null,
        onResultDispatch: () => null,
      });
    } catch (e) {
      console.error(e);
    }
  }, [location]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <h1>Workspace Provider</h1>
      <p>This window should only be visible during local development to help debugging.</p>
      <p>It should be running as a headless application in the environments and you shouldn't be seeing this.</p>
    </>
  );
}

export default Provider;
