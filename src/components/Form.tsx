import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";
import { theme } from "../styles/Theme";

export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper direction="column" gap="24px" justify="center" align="canter">
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Button>SEND MESSAGE</Button>
      </FlexWrapper>
    </StyledForm>
  );
};

const Input = styled.input`
  width: 540px;
  height: 32px;
  border: 1px solid #4A4A4A;
background: #252527;
`;

const Button = styled.button`
  min-width: 112px;
  color: ${theme.colors.primeFont};
  padding: 24px 0;
  transition: 0.2s;
    &:hover {
      scale: 1.2;
    }


  font-family: "DM Sans";
font-size: 20px;
font-weight: 500;
color: ${theme.colors.secondaryFont}
`;

const StyledForm = styled.form`
`;
