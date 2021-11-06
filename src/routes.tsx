import React from "react";
import { Switch, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Users from "./pages/Users";

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route path="/user" component={Users} />
      </Switch>
  );
};

export default Routes;
