import { Logo } from "../../components/logo/HeaderLogo";
import { DesktopMenu } from "./menu/DesktopMenu";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { FlexWrapper } from "../../components/common/FlexWrapper";
import { Container } from "../../components/common/Container";
import { MobileMenu } from "./menu/MobileMenu";
import { S } from "./Header_Styles";
import React from "react";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 901;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <FlexWrapper justify="space-between" align="center" gap="50px">
            {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
            <SocialLinks />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
