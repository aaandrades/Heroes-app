import React from "react";
import { Route } from "react-router-dom";

export const PublicRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest} component={Component} />;
};
