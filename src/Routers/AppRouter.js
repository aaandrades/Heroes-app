import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes exact path="/login" component={LoginScreen}></PublicRoutes>

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={logged}
          ></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};
