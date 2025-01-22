import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

// Desktop Menu

const MenuLink = styled(Link)`
  display: inline-block;
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};

  transition: ${theme.animation.transition};
  &:hover,
  &.active {
    color: ${theme.colors.linkText};
    scale: 1.2;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    gap: 50px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

// Mobile Menu

const MobileNav = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgb(0, 0, 0);

  display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-100%);
      transition: 0.6s ease-in-out;
      

   ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    transition: 0.8s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
    transform: translateY(0);
    ul {
      gap: 50px;
    }

    `}
`;

const BurgerButton = styled.button`
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
    transition: ${theme.animation.transition};
    &:hover {
      scale: 1.2;
    }
  }
`;

export const S = {
  MenuLink,
  Nav,
  MobileNav,
  MobileMenuPopup,
  BurgerButton,
};
