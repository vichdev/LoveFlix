import styled from "styled-components";
import Button from "../../common/Button";

export const GenerateWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContainerGenerate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 300px;
  background-color: #000;
  padding: 1rem;
  border-radius: 5%;
`;

export const Btn = styled(Button)``;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
`;
export const BtnGenerate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-height: 300px;
  height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }
`;

export const SpanContent = styled.span`
  color: #fff;
  max-width: 182px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 1rem;
  word-break: break-all;
`;
