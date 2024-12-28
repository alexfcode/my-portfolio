import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Form } from "../../../components/Form";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <Title>For any questions please contact me:</Title>
          {/* <Text>hi@pavanmg.in</Text> */}
          <Form />
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
padding-bottom: 205px;
`;

const Title = styled.h2`
font-size: 48px;
text-align: center;
margin-bottom: 50px;
`;

// const Text = styled.h3`
// font-family: "DM Sans";
// font-size: 58px;
// line-height: 70px;

// background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
// background-clip: text;
// -webkit-text-fill-color: transparent;
// `;
