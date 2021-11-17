import React from "react";
import * as Styles from "./styles";
import { IPropsMobile } from "./types";

const MobileMenu: React.FC<IPropsMobile> = ({ menu, children }) => {
  return (
    <Styles.MobileMenu menu={menu}>
      <Styles.MobileWrapper>{children}</Styles.MobileWrapper>
    </Styles.MobileMenu>
  );
};

export default MobileMenu;
