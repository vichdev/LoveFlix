import { createGlobalStyle } from "styled-components";
import background from "../assets/stars.png";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background-color: #141414;
  overflow-y: hidden;
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button, svg {
  cursor: pointer;
}
`;
