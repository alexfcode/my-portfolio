import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type BurgerButtonPropsType = {
  isOpen: boolean;
};

export const BurgerButton = (props: BurgerButtonPropsType) => {
  return (
    <StyledBurgerButton>
      <div>{props.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
    </StyledBurgerButton>
  );
};

const StyledBurgerButton = styled.button`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;

  div {
    width: 36px;
    height: 36px;
    color: ${theme.colors.primeFont};
    font-size: 40px;

    position: absolute;
    left: 40px;
    bottom: 50px;
  }
`;
