import { FlexWrapper } from "../../components/common/FlexWrapper";
import { SocialLinks } from "../../components/socialLinks/SocialLinks";
import { DesktopMenu } from "../../components/menu/DesktopMenu";
import { Container } from "../../components/common/Container";
import { FooterLogo } from "../../components/logo/FooterLogo";
import { S } from "./Footer_Styled";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" gap="25px">
          <S.TopFooterWrapper>
            <FooterLogo />
            <FlexWrapper
              justify="space-between"
              align="center"
              wrap="wrap"
              gap="50px"
            >
              {/* <S.PhoneNumber>+375-44-7888000</S.PhoneNumber> */}
              <S.Email>alexf@tut.by</S.Email>
              <SocialLinks />
            </FlexWrapper>
          </S.TopFooterWrapper>
          <hr />
          <S.BottomFooterWrapper>
            <DesktopMenu />
            <S.DesignedBy>
              <span>Designed and built by </span>AlexF <span>with</span> Love{" "}
              <span>&</span> Coffee
            </S.DesignedBy>
          </S.BottomFooterWrapper>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
