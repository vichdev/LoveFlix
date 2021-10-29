import React from "react";
import * as Styles from "./styles";
import { IPropsInput } from "./types";

const Input: React.FC<IPropsInput> = ({ type, placeholder }) => {
  return (
    <Styles.InputWrapper>
      <Styles.Input type={type} placeholder={placeholder}></Styles.Input>
      <Styles.Brake />
    </Styles.InputWrapper>
  );
};

export default Input;
