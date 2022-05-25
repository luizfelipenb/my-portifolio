import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Work from "../pages/Work";

import React from "react";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projetos" component={Work} />
    </Switch>
  );
};

export default Routes;
