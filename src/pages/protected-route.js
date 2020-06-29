import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "./routes";

export default function ProtectedRoute({ children, ...props }) {
  const isAuth = false;
  const onRender = ({ location }) => {
    if (isAuth) return children;
    return (
      <Redirect
        to={{
          pathname: routes.auth.nonAuth,
          state: { from: location },
        }}
      />
    );
  };

  return <Route {...props} render={onRender} />;
}
