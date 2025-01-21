import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Form } from "../../../components/Form";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

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

const StyledContacts = styled.section``;

const Title = styled.h2`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 48,
    Fmin: 27,
  })};

  text-align: center;
  margin-bottom: 100px;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`;
