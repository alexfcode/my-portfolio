import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Menu } from "../../layout/header/menu/Menu";

export const DesktopMenu: React.FC = () => {
  return (
    <StyledNav>
      <Menu />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: flex-start;
  ul {
    display: flex;
    gap: 50px;

    li {
      transition: 0.2s;
      &:hover {
        scale: 1.2;
      }
    }
  }
  @media ${theme.media.tablet} {
    display: none;
  }
`;
