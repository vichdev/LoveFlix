import React from "react";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import * as Styles from "./styles";
import { useAuth } from "../../context/authContext";

const Register: React.FC = () => {
  const {Register,message,isMessage} = useAuth()

  return (
    <Styles.SectionWrapper>
      <Styles.ContainerForms>
        <Styles.CoupleImg src="https://c.tenor.com/r8iIbf4ZJeUAAAAi/couple-bed.gif" />
        <Styles.FormRegister>
          <Styles.Register>Cadastre-se</Styles.Register>
          <Label name="Usuário" color="#e50000" />
          <Input type="text" required={true} />
          <Label name="Senha" color="#e50000" />
          <Input type="password" required={true} />
          <Styles.BtnRegister onClick={() => Register('kkfkfkfkf', '1fdsrwerwefdfsdf2345566')}>Registre-se</Styles.BtnRegister>
          {isMessage ? <h1 style={{color: '#fff'}}>{message}</h1> : ''}
        </Styles.FormRegister>
      </Styles.ContainerForms>
    </Styles.SectionWrapper>
  );
};

export default Register;
