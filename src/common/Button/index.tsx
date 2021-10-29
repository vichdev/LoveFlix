import React from "react";
import * as Styles from "./styles";
import { IPropsButton } from "./types";

const Button: React.FC<IPropsButton> = ({ text, onClick }) => {
  return <Styles.Button onClick={onClick}>{text}</Styles.Button>;
};

export default Button;
