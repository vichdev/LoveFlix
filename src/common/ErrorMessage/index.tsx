import React from "react";
import * as Styles from "./styles";
import { useAuth } from "../../context/authContext";

const ErrorMessage: React.FC = () => {
  const { isMessage, message } = useAuth();

  return <Styles.Error>{message}</Styles.Error>;
};

export default ErrorMessage;
