import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

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
  /* min-height: 30vh; */
`;

const Title = styled.h2``;

const Text = styled.h5``;
