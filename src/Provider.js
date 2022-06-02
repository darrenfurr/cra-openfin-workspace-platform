import { useEffect } from "react";
import * as WorkspacePlatform from "@openfin/workspace-platform";
import { Home } from "@openfin/workspace";

function Provider({ user }) {
  useEffect(() => {
    const initPlatform = async () => {
      console.log("init platform...");

      try {
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

        // TODO: console.log("Register with Notification Center...");
        //   await register({
        //     id: "demo-workspace-provider",
        //     title: "Demo Workspace",
        //     icon: "https://openfin.co/favicon-32x32.png",
        //   });
        //   console.log("Registered notifications");
      } catch (e) {
        console.error(e);
      }

      console.log("show Home...");
      await Home.show();
    };

    initPlatform();
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
