import styled from "styled-components";

export const backgroundModal = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: red;
  width: 50%;
  height: 50%;
  position: relative;
  svg {
    color: #fff;
    font-size: 50px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
