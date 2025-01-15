import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const DesktopMenu = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Tech Stack</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
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

const Link = styled.a`
font-family: "DM Sans";
font-size: 20px;
font-weight: 500;
color: ${theme.colors.secondaryFont}
`
