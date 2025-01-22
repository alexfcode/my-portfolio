import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// Desktop Menu

const MenuLink = styled(Link)`
  display: inline-block;
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};

  transition: 0.2s;
  &:hover, &.active {
    scale: 1.2;
  }
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: flex-start;
  ul {
    display: flex;
    gap: 50px;

    /* li {
      transition: 0.2s;
      &:hover {
        scale: 1.2;
      }
    } */
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

  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;

    li {
      transition: 0.2s;
      &:hover {
        scale: 1.2;
      }
    }
  }
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
    transition: 0.2s;
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
