import styled from "styled-components";
import { Button } from "../../common/Button/styles";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    height: 800px;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    height: 800px;
    height: 800px;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
`;

export const ContainerForms = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 150px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 600px;
    margin-bottom: 0;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 768px) and (min-width: 600px) {
    flex-direction: column;
    height: 100vh;
    margin-bottom: 0;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    height: 800px;
    margin-bottom: 0;
    justify-content: space-evenly;
  }
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
  @media only screen and (max-width: 360px) and (min-width: 0px) {
    width: 150px;
    height: 150px;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) and (min-width: 360px) {
    width: 220px;
    height: 220px;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) and (min-width: 700px) {
    width: 300px;
    height: 300px;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    width: 300px;
    height: 300px;
    justify-content: center;
  } ;
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

  @media only screen and (max-width: 600px) {
    width: 280px;

    max-height: 300px;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    width: 380px;

    max-height: 400px;
  }
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    width: 380px;
    height: 500px;
  }
`;

export const BtnRegister = styled(Button)``;
