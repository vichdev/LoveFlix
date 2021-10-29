import styled from "styled-components";

export const Button = styled.button`
  width: 225px;
  height: 50px;

  border-radius: 2px;
  border: none;
  box-shadow: 0px 0px 1px 1px #141414;
  background-color: #e50000;
  opacity: 0.9;

  color: #ffffff;
  font-size: 15px;

  &:hover {
    background: red;
    color: #fff;
    transition: 0.5s ease;
    opacity: 1;
  }
`;
