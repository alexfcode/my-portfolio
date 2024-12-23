import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { Menu } from "../../components/nav/Nav";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-between" align="center">
        <Logo />
        <FlexWrapper justify="space-between" align="center" gap="64px">
          <PhoneNumber>+91 12345 09876</PhoneNumber>
          <Email>info@example.com</Email>
          <SocialLinks />
        </FlexWrapper>
      </FlexWrapper>
      <hr />
      <FlexWrapper justify="space-between" align="center">
        <Menu />
        <DesignedBy>Designed and built by Pavan MG with Love & Coffee</DesignedBy>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  min-height: 30vh;
  background-color: #9cf785;
`;

const PhoneNumber = styled.span`
  display: block;
`;

const Email = styled.span`
  display: block;
`;

const DesignedBy = styled.span`
    display: block;

`
