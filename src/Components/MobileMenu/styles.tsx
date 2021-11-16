import styled from "styled-components";
import { Button } from "../../common/Button/styles";

export const MobilePage = styled.div<{ mobile?: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  display: ${(props) => (props.mobile ? "flex" : "none")};
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnMobile = styled(Button)`
  width: 110px;
`;

export const LogOutMessage = styled.button`
  background: none;
  color: #fff;
  font-size: 16px;
  border: none;

  &:hover {
    color: #b82727;
    transition: 0.4s ease;
  }
`;
