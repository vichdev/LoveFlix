import styled from "styled-components";

export const MobileMenu = styled.div<{ menu?: boolean }>`
  width: 100%;
  height: 100%;
  max-height: 1550px;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.menu ? "flex" : "none")};
  position: absolute;
  z-index: 9;

  svg {
    color: #fff;
    font-size: 50px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const MobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid red;
`;
