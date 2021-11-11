import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Principal from "./pages/Principal";
import Users from "./pages/Users";
import { useAuth } from "./context/authContext";

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  exact,
  component,
}) => {
  const { isAuthenticate } = useAuth();

  return isAuthenticate() ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Principal} />
      <PrivateRoute path="/user" exact component={Users} />
    </Switch>
  );
};

export default Routes;
