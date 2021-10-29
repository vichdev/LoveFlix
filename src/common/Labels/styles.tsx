import styled from "styled-components";

export const Label = styled.label<{ color?: string }>`
  width: 225px;
  text-align: start;

  color: ${(props) => (props.color ? props.color : "black")};
  line-height: 15px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
