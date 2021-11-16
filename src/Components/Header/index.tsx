import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import Logo from "../../common/Logo";
import Modal from "../Modal";
import Forms from "../../common/Form";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import { IPropsModal } from "../Modal/types";
import { FiMenu } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import ErrorMessage from "../../common/ErrorMessage";
import MobileMenu from "../MobileMenu";

const Header: React.FC<IPropsModal> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [logout, setLogOut] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const { Login, isMessage, message, dados, signOut } = useAuth();
  const location = useLocation();

  const addFood = async (food: string) => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    const body = {
      food: food,
    };
    await api.post("foods/food", body, { headers: header }).then((response) => {
      if (response.status === 200) {
        setOpen(false);
      } else {
        alert("deu ruiim");
      }
    });
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Logo />
            <Styles.BtnLogIn onClick={() => setOpen(!open)}>
              Entrar
            </Styles.BtnLogIn>
            <FiMenu onClick={() => setOpen(!open)} />
          </Styles.HeaderWrapper>
        </Styles.Header>
      ) : (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Styles.UserWrapper>
              <Logo />
              <Styles.UserLogged style={{ color: "#fff" }}>
                Bem Vindo(a), {dados?.user.name}
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
            <Styles.LogOut onClick={() => setLogOut(!logout)}>
              Sair
            </Styles.LogOut>
            <FiMenu onClick={() => setMobile(!mobile)} />
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
          {isMessage ? (
            <ErrorMessage>
              {" "}
              Usuário não existe ou não está cadastrado.{" "}
            </ErrorMessage>
          ) : (
            ""
          )}
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
      <MobileMenu />
    </>
  );
};

export default Header;
