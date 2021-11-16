import React from "react";
import * as Styles from "./styles";
import { IPropsMobile } from "./types";

const MobileMenu: React.FC<IPropsMobile> = ({ mobile, children }) => {
  return (
    <Styles.MobilePage mobile={mobile}>
      <Styles.MobileWrapper>{children}</Styles.MobileWrapper>
    </Styles.MobilePage>
  );
};

export default MobileMenu;
