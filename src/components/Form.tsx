import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Form = () => {
  return (
    <StyledForm>
      <Input placeholder={"Name"}></Input>
      <Input placeholder={"Subject"}></Input>
      <Input as={"textarea"} placeholder={"Message"}></Input>
      <Button type={"submit"}>SEND MESSAGE</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background: #252527;
  padding: 7px 15px;
  
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
}

  
`;

const Button = styled.button`
  min-width: 112px;
  color: ${theme.colors.primeFont};
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }

  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};
`;
