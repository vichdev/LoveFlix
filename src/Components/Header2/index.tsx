import React from "react";
import * as Styles from "./styles";
import Logo from "../../common/Logo";

const header2: React.FC = () => {
  return (
    <>
      <Styles.Header>
        <Styles.HeaderWrapper>
          <Logo />
          <Styles.User>Bem vindo, Victor.</Styles.User>
        </Styles.HeaderWrapper>
      </Styles.Header>
    </>
  );
};

export default header2;
