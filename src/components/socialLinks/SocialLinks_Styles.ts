import styled from "styled-components";
import { theme } from "../../styles/Theme";

const SocialLinks = styled.div`
  ul {
    display: flex;
    gap: 10px;
    align-items: center;
    li {
      transition: ${theme.animation.transition};
      &:hover {
        transform: translateY(-4px);
      }
    }
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Link = styled.a``;

export const S = {
  SocialLinks,
  Link,
};
