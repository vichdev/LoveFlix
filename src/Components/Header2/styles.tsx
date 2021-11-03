import styled from "styled-components";

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
  justify-content: start;

  background: #000;
`;

export const User = styled.span`
  font-size: 18px;
  color: #fff;
  margin-left: 2rem;
`;