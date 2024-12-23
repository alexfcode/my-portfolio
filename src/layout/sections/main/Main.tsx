import React from "react";
import mainPhoto from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <FlexWrapper direction="column">
            <h2>Hi 👋,</h2>
            <h2>My name is</h2>
            <h2>Pavan MG</h2>
            <h1>I build things for web</h1>
          </FlexWrapper>
          <Photo src={mainPhoto} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  /* min-height: 30vh; */
`;

const Photo = styled.img`
  width: 350x;
  height: 350px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#e70faa, #00c0fd) border-box;
  border: 9px solid transparent;
  border-radius: 50%;
  object-fit: cover;
`;
