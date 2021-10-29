import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import Principal from "./pages/Principal";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
