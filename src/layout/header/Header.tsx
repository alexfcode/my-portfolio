import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "../../components/nav/DesktopMenu";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { MobileMenu } from "../../components/nav/MobileMenu";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
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
    </S.Header>
  );
};