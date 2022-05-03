import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Work from "../pages/Work";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/projetos" component={Work} />
      <Route path="/contato" component={Contact} />
      <Route path="/sobre" component={About} />
    </Switch>
  );
};

export default Routes;
