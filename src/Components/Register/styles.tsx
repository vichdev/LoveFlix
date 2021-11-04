import styled from "styled-components";
import { Button } from "../../common/Button/styles";
import background from "../../assets/hearts.png";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #141414;
`;

export const ContainerForms = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 150px;
`;

export const Register = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  color: #e50000;
`;

export const CoupleImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const FormRegister = styled.div`
  max-height: 500px;
  max-width: 382px;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  background-color: #000;
  box-shadow: 0px 0px 5px red;
  outline: 50;
`;

export const BtnRegister = styled(Button)`
  margin-top: 1rem;
`;
