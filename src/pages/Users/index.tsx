import React from "react";
import * as Styles from "./styles";
import Button from "../../common/Button";
import Header from "../../Components/Header";
import { Container, Row } from "react-bootstrap";

const Users: React.FC = () => {
  return (
    <>
      <Header />
      <Styles.GenerateWrapper>
        <Container>
          <Row className="justify-content-center">
            <Styles.ColunaCategories sm={12} md={5} className="p-30">
              <Styles.Title>Sobremesas</Styles.Title>
              <Styles.Content>
                <Styles.SpanContent>abc</Styles.SpanContent>
              </Styles.Content>
            </Styles.ColunaCategories>
            <Styles.ColunaCategories sm={12} md={5} className="p-30">
              <Styles.Title>Comidas</Styles.Title>
              <Styles.Content>
                <Styles.SpanContent>abc</Styles.SpanContent>
              </Styles.Content>
            </Styles.ColunaCategories>
          </Row>
          <Row className="justify-content-center">
            <Styles.ColunaButton sm={12} md={12} lg={12}>
              <Styles.BtnGenerate>
                <Button text="Generar" />
              </Styles.BtnGenerate>
            </Styles.ColunaButton>
          </Row>
          <Row className="justify-content-center">
            <Styles.ColunaCategories sm={12} md={5} className="p-50">
              <Styles.Title>Filmes</Styles.Title>
              <Styles.Content>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abhfghfghc</Styles.SpanContent>
                <Styles.SpanContent>abchgfhfgfdgdfgfdgdfgdf</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
                <Styles.SpanContent>abc</Styles.SpanContent>
              </Styles.Content>
            </Styles.ColunaCategories>
            <Styles.ColunaCategories sm={12} md={5} className="p-30">
              <Styles.Title>Bebidas</Styles.Title>
              <Styles.Content>
                <Styles.SpanContent>abc</Styles.SpanContent>
              </Styles.Content>
            </Styles.ColunaCategories>
          </Row>
        </Container>
      </Styles.GenerateWrapper>
    </>
  );
};

export default Users;
