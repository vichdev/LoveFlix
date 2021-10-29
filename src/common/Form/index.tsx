import React from "react";
import * as Styles from "./styles";

const Forms: React.FC = ({ children }) => {
  return (
    <Styles.FormWrapper>
      <Styles.FormContent>{children}</Styles.FormContent>
    </Styles.FormWrapper>
  );
};

export default Forms;
