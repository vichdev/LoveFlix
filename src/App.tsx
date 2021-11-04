import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import Routes from "./routes";
import { Context } from "./context/authContext";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyles />
      <Routes />
    </Context>
  );
};

export default App;
