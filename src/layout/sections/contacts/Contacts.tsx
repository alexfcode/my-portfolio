import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <FlexWrapper direction="column">
        <Title>For any questions please mail me:</Title>
        <Text>hi@pavanmg.in</Text>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 30vh;
  background-color: #eca381;
`;

const Title = styled.h2`
text-align: center;

`;
const Text = styled.h5`
text-align: center;
`
