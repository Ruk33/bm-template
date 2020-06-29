import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./protected-route";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.guest.routes.map((route) => (
          <Route
            exact
            path={route.uri}
            key={route.uri}
            component={route.component}
          />
        ))}
        {routes.auth.routes.map((route) => (
          <ProtectedRoute exact path={route.uri} key={route.uri}>
            <route.component />
          </ProtectedRoute>
        ))}
        <Route path="*" component={routes.notFound} />
      </Switch>
    </Router>
  );
}
