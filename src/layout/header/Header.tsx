import React from "react";

import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/nav/Nav";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <Logo />
          <Menu />
          <SocialLinks />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* min-height: 30vh; */
`;
