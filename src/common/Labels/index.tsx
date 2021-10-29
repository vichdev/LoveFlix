import React from "react";
import * as Styles from "./styles";
import { IPropsLabel } from "./types";

const Label: React.FC<IPropsLabel> = ({ name, color }) => {
  return <Styles.Label color={color}>{name}</Styles.Label>;
};

export default Label;
