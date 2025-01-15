import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Form } from "../../../components/Form";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <Title>For any questions please contact me:</Title>
        <Form />
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  margin-bottom: 50px;
`;
