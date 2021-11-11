import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import Routes from "./routes";
import { Context } from "./context/authContext";
import { Router } from "react-router-dom";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </Context>
  );
};

export default App;
