import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
const Provider = React.lazy(() => import("./Provider"));

function App() {
  return (
    <Router>
      <Switch>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route path="/provider" exact>
            <Provider />
          </Route>
          <Route path="/" component={Home} exact />
        </React.Suspense>
      </Switch>
    </Router>
  );
}

export default App;
