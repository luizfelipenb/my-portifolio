import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Work from "../pages/Work";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projetos">
        <Work />
      </Route>
    </Switch>
  );
};

export default Routes;
