import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Provider from "./Provider";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/provider" component={Provider} exact />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
