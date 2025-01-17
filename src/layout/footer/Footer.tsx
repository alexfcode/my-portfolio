import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { DesktopMenu } from "../../components/nav/DesktopMenu";
import { Container } from "../../components/Container";
import { FooterLogo } from "../../components/logo/FooterLogo";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" gap="25px">
          <TopFooterWrapper>
            <FooterLogo />
            <FlexWrapper justify="space-between" align="center" wrap="wrap" gap="50px">
              <PhoneNumber>+91 12345 09876</PhoneNumber>
              <Email>hi@pavanmg.in</Email>
              <SocialLinks />
            </FlexWrapper>
          </TopFooterWrapper>
          <hr />
          <BottomFooterWrapper>
              <DesktopMenu />
              <DesignedBy>
                <span>Designed and built by </span>Pavan MG <span>with</span>{" "}
                Love <span>&</span> Coffee
              </DesignedBy>
          </BottomFooterWrapper>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-bottom: 60px;
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;

const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BottomFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;


const PhoneNumber = styled.span`
  display: block;
`;

const Email = styled.span`
  display: block;

  font-family: "DM Sans";

  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DesignedBy = styled.span`
  display: block;
  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  span {
    -webkit-text-fill-color: ${theme.colors.primeFont};
  }
`;
