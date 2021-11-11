import React, { useState } from "react";
import * as Styles from "./styles";
import Logo from "../../common/Logo";
import Modal from "../Modal";
import Forms from "../../common/Form";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import { IPropsModal } from "../Modal/types";
import { FiLogIn, FiPower } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";

const Header: React.FC<IPropsModal> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [logout, setLogOut] = useState<boolean>(false);
  const { Login, isMessage, message, user, signOut } = useAuth();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Logo />
            <Styles.BtnLogIn onClick={() => setOpen(!open)}>
              Entrar
            </Styles.BtnLogIn>
            <FiLogIn onClick={() => setOpen(!open)} />
          </Styles.HeaderWrapper>
        </Styles.Header>
      ) : (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Styles.UserWrapper>
              <Logo />
              <Styles.UserLogged style={{ color: "#fff" }}>
                Bem Vindo(a), {user?.name}
              </Styles.UserLogged>
            </Styles.UserWrapper>
            <Styles.BtnGenerate onClick={() => setOpen(!open)}>
              + Comida
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpen(!open)}>
              + Sobremesa
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpen(!open)}>
              + Bebida
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpen(!open)}>
              + Filme
            </Styles.BtnGenerate>
            <Styles.IconLogOutWrapper>
              <FiPower onClick={() => setLogOut(!logout)} />
            </Styles.IconLogOutWrapper>
            <FiLogIn onClick={() => setOpen(!open)} />
          </Styles.HeaderWrapper>
        </Styles.Header>
      )}
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <Forms>
          <Label name="Usuário" color="#e50000" />
          <Input type="text" />
          <Label name="Senha" color="#e50000" />
          <Input type="password" />
          <Styles.BtnModal onClick={() => Login("monica", "123456")}>
            Entrar
          </Styles.BtnModal>
          {isMessage ? <h1>{message}</h1> : ""}
        </Forms>
      </Modal>
      <Modal isOpen={logout} onClose={() => setLogOut(!logout)}>
        <Styles.LogOutWrapper>
          <Styles.MessageLogOut>
            Tem certeza que deseja Sair?
          </Styles.MessageLogOut>
          <Styles.ButtonWrapper>
            <Styles.ButtonLogOut onClick={signOut}>Sim</Styles.ButtonLogOut>
            <Styles.ButtonLogOut onClick={() => setLogOut(!logout)}>
              Não
            </Styles.ButtonLogOut>
          </Styles.ButtonWrapper>
        </Styles.LogOutWrapper>
      </Modal>
    </>
  );
};

export default Header;
