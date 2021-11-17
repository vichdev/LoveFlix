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
  justify-content: space-around;
  background: #000;
  svg {
    color: #fff;
    font-size: 50px;
    border-radius: 10%;
    padding: 5px;
    display: none;
  }

  @media only screen and (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    display: flex;
    padding: 1.5rem;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    svg {
      font-size: 40px;
      display: block;
      color: #fff;
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    width: 100%;
    display: flex;
    padding: 5px;
    justify-content: space-around;
    svg {
      display: block;
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1640px) and (min-width: 1001px) {
    width: 100%;
    display: flex;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) and (min-width: 300px) {
    text-align: center;
    align-items: center;
    justify-content: space-around;
    svg {
      display: flex;
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      font-size: 50px;
    }
  }
`;

export const UserLogged = styled.span`
  width: 200px;
  font-weight: bold;

  margin-left: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) and (min-width: 300px) {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
  }
  @media only screen and (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
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
  &:active {
    position: relative;
    top: 1px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: none;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 800px) and (min-width: 300px) {
    display: none;
  }
`;

export const BtnMobile = styled(Button)``;

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

export const MobileLogOut = styled.button`
  background: none;
  color: #fff;
  font-size: 16px;
  border: none;

  &:hover {
    color: #b82727;
    transition: 0.4s ease;
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

export const ButtonWrapperLogOut = styled.div`
  width: 200px;

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
