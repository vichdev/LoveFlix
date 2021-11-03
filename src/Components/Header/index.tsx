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
          <Button text="Entrar" onClick={() => setOpen(!open)} />
        </Styles.HeaderWrapper>
      </Styles.Header>
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <Forms>
          <Label name="Usuário" color="#e50000" />
          <Input type="text" />
          <Label name="Senha" color="#e50000" />
          <Input type="password" />
          <Button text="Entrar" onClick={userPage} />
        </Forms>
      </Modal>
    </>
  );
};

export default Header;
