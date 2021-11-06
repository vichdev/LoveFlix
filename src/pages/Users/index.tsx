import React from "react";
import * as Styles from "./styles";
import Button from "../../common/Button";
import Header from "../../Components/Header";

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
