import React from "react";
import * as Styles from "./styles";
import LogoImg from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <Styles.LogoWrapper>
      <Styles.Logo
        src={LogoImg}
        alt="Logo LoveFLIX com casal sentado ao lado"
      ></Styles.Logo>
      <Styles.TitleLogo>
        Love<Styles.Span>FLIX</Styles.Span>
      </Styles.TitleLogo>
    </Styles.LogoWrapper>
  );
};

export default Logo;
