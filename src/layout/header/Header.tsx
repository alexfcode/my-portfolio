import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "../../components/nav/DesktopMenu";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { MobileMenu } from "../../components/nav/MobileMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <FlexWrapper justify="space-between" align="center" gap="50px">
            <DesktopMenu />
            <MobileMenu />
            <SocialLinks />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
padding-top: 36px;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  opacity: 0.7;
  
  /* padding: 36px 0; */
`;
