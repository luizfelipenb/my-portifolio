import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Work from "../pages/Work";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/projetos">
        <Work />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
