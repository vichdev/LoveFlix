import styled from "styled-components";
import { Button } from "../../common/Button/styles";

export const Header = styled.header`
  width: 100%;
  border-bottom: 0.1px solid red;
  background-color: #000;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  padding: 5px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: #000;
  svg {
    color: #fff;
    font-size: 50px;
    background: #e50000;
    border-radius: 10%;
    border: solid 1px #fff;
    padding: 5px;
    display: none;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
    svg {
      display: block;
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
  }
  @media only screen and (max-width: 1640px) {
    width: 100%;
    display: flex;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const BtnModal = styled(Button)`
  margin-top: 1rem;
`;

export const BtnLogIn = styled(Button)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
