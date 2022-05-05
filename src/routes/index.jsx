import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
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
    </Switch>
  );
};

export default Routes;
