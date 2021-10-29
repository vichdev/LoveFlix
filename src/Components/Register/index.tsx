import React from "react";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import * as Styles from "./styles";
import Couple from "../../assets/Couple3.svg";

const Register: React.FC = () => {
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
          <Styles.BtnRegister>Registre-se</Styles.BtnRegister>
        </Styles.FormRegister>
      </Styles.ContainerForms>
    </Styles.SectionWrapper>
  );
};

export default Register;
