import React, { useState } from "react";
import * as Styles from "./styles";
import Button from "../../common/Button";
import Logo from "../../common/Logo";
import Modal from "../Modal";
import Forms from "../../common/Form";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import { IPropsModal } from "../Modal/types";
import { useHistory } from "react-router";
import { FiLogIn } from "react-icons/fi";

const Header: React.FC<IPropsModal> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const history = useHistory();

  const userPage = () => {
    history.push("/user");
  };

  return (
    <>
      <Styles.Header>
        <Styles.HeaderWrapper>
          <Logo />
          <Styles.BtnLogIn onClick={() => setOpen(!open)}>
            Entrar
          </Styles.BtnLogIn>
          <FiLogIn onClick={() => setOpen(!open)} />
        </Styles.HeaderWrapper>
      </Styles.Header>
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <Forms>
          <Label name="Usuário" color="#e50000" />
          <Input type="text" />
          <Label name="Senha" color="#e50000" />
          <Input type="password" />
          <Styles.BtnModal onClick={userPage}>Entrar</Styles.BtnModal>
        </Forms>
      </Modal>
    </>
  );
};

export default Header;
