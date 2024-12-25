import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { Menu } from "../../components/nav/Menu";
import { Container } from "../../components/Container";
import { FooterLogo } from "../../components/logo/FooterLogo";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" gap="25px">
          <FlexWrapper justify="space-between" align="flex-end">
            <FooterLogo />
            <FlexWrapper justify="space-between" align="center" gap="64px">
              <PhoneNumber>+91 12345 09876</PhoneNumber>
              <Email>info@example.com</Email>
              <SocialLinks />
            </FlexWrapper>
          </FlexWrapper>
          <hr />
          <FlexWrapper justify="space-between" align="flex-end">
            <Menu />
            <DesignedBy>
              Designed and built by Pavan MG with Love & Coffee
            </DesignedBy>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledFooter >
  );
};

const StyledFooter = styled.footer`
padding-bottom: 60px;
font-family: "DM Sans";
font-size: 18px;
font-weight: 400;
line-height: 26px;
`;

const PhoneNumber = styled.span`
  display: block;
`;

const Email = styled.span`
  display: block;
`;

const DesignedBy = styled.span`
  display: block;
  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
`;

