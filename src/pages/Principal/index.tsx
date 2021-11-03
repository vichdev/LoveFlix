import React from "react";
import Register from "../../Components/Register";
import Header from "../../Components/Header";
import { useRouteMatch } from "react-router";

const Principal: React.FC = () => {
  return (
    <>
      <Header />
      <Register />
    </>
  );
};

export default Principal;
