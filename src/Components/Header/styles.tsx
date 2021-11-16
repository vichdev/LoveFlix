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

    border-radius: 10%;

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

  @media only screen and (max-width: 1000px) {
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
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const BtnGenerate = styled(Button)`
  width: 110px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: none;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const LogOut = styled.button`
  background: none;
  color: #fff;
  font-size: 16px;
  border: none;

  &:hover {
    color: #b82727;
    transition: 0.4s ease;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
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
