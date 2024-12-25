import React from "react";
import mainPhoto from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <TextWrapper>
            <Text>Hi 👋,<br/>My name is</Text>
            <Name>Pavan MG</Name>
            <MainText>I build things for web</MainText>
          </TextWrapper>
          <PhotoWrapper>
            <Photo src={mainPhoto} alt="" />
          </PhotoWrapper>

        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const TextWrapper = styled.div`
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

const PhotoWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    
  }
`

const Name = styled.h2`
  color: ${theme.colors.mainSectionFont};
font-size: 58px;

background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Text = styled.h2`
  color: ${theme.colors.mainSectionFont};
font-size: 58px;
`

const MainText = styled.h1`
  color: ${theme.colors.mainSectionFont};
font-size: 58px;
`