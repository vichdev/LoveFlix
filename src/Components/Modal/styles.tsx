import styled from "styled-components";

export const backgroundModal = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #000;
  width: 400px;
  height: 300px;
  border-radius: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e50000;
  svg {
    color: #fff;
    font-size: 50px;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 270px;
  }
`;
