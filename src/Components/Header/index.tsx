import React, { useState } from "react";
import * as Styles from "./styles";
import Button from "../../common/Button";
import Logo from "../../common/Logo";
import Modal from "../Modal";
import Forms from "../../common/Form";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Styles.Header>
        <Styles.HeaderWrapper>
          <Logo />
          <Button text="Entrar" onClick={() => setOpen(!open)} />
        </Styles.HeaderWrapper>
      </Styles.Header>
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <Forms></Forms>
      </Modal>
    </>
  );
};

export default Header;
