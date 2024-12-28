import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { Menu } from "../../components/nav/Menu";
import { Container } from "../../components/Container";
import { FooterLogo } from "../../components/logo/FooterLogo";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" gap="25px">
          <FlexWrapper justify="space-between" align="flex-end">
            <FooterLogo />
            <FlexWrapper justify="space-between" align="center" gap="64px">
              <PhoneNumber>+91 12345 09876</PhoneNumber>
              <Email>hi@pavanmg.in</Email>
              <SocialLinks />
            </FlexWrapper>
          </FlexWrapper>
          <hr />
          <FlexWrapper justify="space-between" align="flex-end">
            <Menu />
            <DesignedBy>
              <span>Designed and built by </span>Pavan MG <span>with</span> Love <span>&</span> Coffee
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

font-family: "DM Sans";

background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
background-clip: text;
-webkit-text-fill-color: transparent;
`;

const DesignedBy = styled.span`
  display: block;
  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  span {
    -webkit-text-fill-color: ${theme.colors.primeFont};
  }
`;

