import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Fallback from "../modules/shared/fallback";

//components
const Dashboard = React.lazy(() => import("../modules/dashboard"));
const Subject = React.lazy(() => import("../modules/subject"));


const Routes = () => {

    return (
        <Router>
          <React.Suspense fallback={Fallback}>
              <Switch>
                  <Route exact path="/:subjectId" component={Subject} />
                  <Route exact path="/" component={Dashboard} />
              </Switch>
          </React.Suspense>
        </Router>
    )
}

export default Routes;
