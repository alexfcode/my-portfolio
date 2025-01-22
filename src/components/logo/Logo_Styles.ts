import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Logo = styled.a`
  &:hover {
    transition: ${theme.animation.transition};
    &:hover {
      scale: 1.2;
    }
  }
`;

export const S = {
  Logo,
};
