import React from "react";
import Header from "../../Components/Header";
import * as Styles from "./styles";
import Button from "../../common/Button";

const Users: React.FC = () => {
  return (
    <>
      <Header />
      <Styles.GenerateWrapper>
        <Styles.ContainerGenerate>
          <Styles.ContentContainer>
            <Styles.Title>Comidas</Styles.Title>
          </Styles.ContentContainer>
          <Styles.ContentContainer>
            <Styles.Title>Bebidas</Styles.Title>
          </Styles.ContentContainer>
        </Styles.ContainerGenerate>
        <Styles.BtnGenerate>
          <Button text="Generar" />
        </Styles.BtnGenerate>
        <Styles.ContainerGenerate>
          <Styles.ContentContainer>
            <Styles.Title>Filmes</Styles.Title>
            <Styles.Content>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>Pizzadsadasasdas</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abcdasdasdasasd</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abcdasdassadsad</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abcffffffffffffff</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abceeeeeeeeeeeeee</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
              <Styles.SpanContent>abc</Styles.SpanContent>
            </Styles.Content>
          </Styles.ContentContainer>
          <Styles.ContentContainer>
            <Styles.Title>Categoria de filme</Styles.Title>
          </Styles.ContentContainer>
        </Styles.ContainerGenerate>
      </Styles.GenerateWrapper>
      ;
    </>
  );
};

export default Users;
