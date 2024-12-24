import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <Title>For any questions please mail me:</Title>
          <Text>hi@pavanmg.in</Text>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
padding-bottom: 205px;
`;

const Title = styled.h2`
color: ${theme.colors.mainSectionFont};
font-family: "DM Sans";
font-size: 58px;
`;

const Text = styled.h5`
font-family: "DM Sans";
font-size: 58px;

background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;
