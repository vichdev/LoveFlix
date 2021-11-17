import styled from "styled-components";

export const Button = styled.button`
  width: 225px;
  height: 50px;

  border-radius: 2px;
  border: none;
  box-shadow: inset 0px 0px 1px 1px #141414;
  background: linear-gradient(to bottom, #e50000 5%, #7e0c0c 80%);
  opacity: 0.9;

  color: #ffffff;
  font-size: 15px;
  transition: 10s;

  &:hover {
    background: linear-gradient(to bottom, #7e0c0c 5%, #e50000 80%);
    color: #fff;
    opacity: 1;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
