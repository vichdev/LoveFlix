import React, { useState } from "react";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import * as Styles from "./styles";
import { useAuth } from "../../context/authContext";
import ErrorMessage from "../../common/ErrorMessage";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { Register, message, isMessage } = useAuth();

  return (
    <Styles.SectionWrapper>
      <Styles.ContainerForms>
        <Styles.CoupleImg
          src="https://c.tenor.com/r8iIbf4ZJeUAAAAi/couple-bed.gif"
          alt="Gif Casal se beijando."
        />
        <Styles.FormRegister>
          <Styles.Register>Cadastre-se</Styles.Register>
          <Label name="Usuário" color="#e50000" />
          <Input
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label name="Senha" color="#e50000" />
          <Input
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styles.BtnRegister onClick={() => Register(name, password)}>
            Registre-se
          </Styles.BtnRegister>
          {isMessage ? <ErrorMessage> Usuário já existe. </ErrorMessage> : ""}
        </Styles.FormRegister>
      </Styles.ContainerForms>
    </Styles.SectionWrapper>
  );
};

export default Register;
