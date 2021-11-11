import styled from "styled-components";
import { Button } from "../../common/Button/styles";
import { FiPower } from "react-icons/fi";

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

  @media only screen and (max-width: 950px) {
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

export const UserWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserLogged = styled.span`
  font-weight: bold;
`;

export const BtnModal = styled(Button)`
  margin-top: 1rem;
`;

export const BtnLogIn = styled(Button)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const BtnGenerate = styled(Button)`
  width: 110px;
`;

export const IconLogOutWrapper = styled.div`
  svg {
    display: flex;
    color: #fff;
    font-size: 50px;
    background: #e50000;
    border-radius: 50%;
    border: black;
    padding: 5px;
    opacity: 0.9;

    &:hover {
      text-indent: 30px;
      transition: 0.5s ease;
      opacity: 1;
    }
  }
`;

// Modal LogOut

export const LogOutWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const MessageLogOut = styled.span`
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-around;
`;
export const ButtonLogOut = styled(Button)`
  width: 70px;

  &:hover {
    background-color: transparent;
    border: 1px red solid;
    transition: 1s ease;
  }
`;
