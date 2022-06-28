import { useEffect } from "react";
import * as WorkspacePlatform from "@openfin/workspace-platform";
function Provider() {
  useEffect(() => {
    WorkspacePlatform.init({
      browser: {},
    }).then(() => {
      return window.fin.Platform.getCurrentSync().createWindow({
        name: "workspace-provider-window",
        defaultCentered: true,
        autoShow: true,
        resizable: true,
        saveWindowState: false,
        frame: false,
        alwaysOnTop: true,
        url: "http://localhost:3000",
      });
    });
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
