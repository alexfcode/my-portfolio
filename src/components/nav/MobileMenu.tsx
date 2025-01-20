import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { BurgerButton } from "./BurgerButton";
import { Menu } from "../../layout/header/menu/Menu";

export const MobileMenu: React.FC = () => {
  return (
    <StyledMobileNav>
      <BurgerButton isOpen={true} />
      <MobileMenuPopup isOpen={true}>
        <Menu />
      </MobileMenuPopup>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: #3b3838f6;

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

const Link = styled.a`
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};
`;
