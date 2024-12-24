import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = () => {
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
  ul {
    display: flex;
    gap: 50px;
  }
`;

const Link = styled.a`
color: ${theme.colors.smallTextAndIconsFont}
`
