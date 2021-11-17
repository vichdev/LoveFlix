import { Col } from "react-bootstrap";
import styled from "styled-components";
import Button from "../../common/Button";

export const GenerateWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #000;
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
`;

export const SpanContent = styled.span`
  color: #fff;
  width: 25%;
  font-size: 20px;
  text-align: center;
  margin-top: 1rem;
  word-break: break-all;
`;

export const ColunaCategories = styled(Col)`
  padding: 1rem;
  border: 3px solid #fff;
  margin: 1rem;
  border-radius: 10px;
`;

export const ColunaButton = styled(Col)`
  padding: 1rem;
  margin: 1rem;
`;
