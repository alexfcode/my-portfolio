import mainPhoto from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <TextWrapper>
            <Text>
              Hi 👋,
              <br />
              My name is
            </Text>
            <Name>Pavan MG</Name>
            <MainText>I build things for web</MainText>
          </TextWrapper>
          <PhotoWrapper>
            <Photo src={mainPhoto} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const TextWrapper = styled.div``;

const Photo = styled.img`
  width: 350x;
  height: 350px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#e70faa, #00c0fd) border-box;
  border: 9px solid transparent;
  border-radius: 50%;
  object-fit: cover;
`;

const PhotoWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
  }
`;

const Name = styled.h2`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })};

  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

white-space: nowrap;

@media ${theme.media.tablet} {
  margin: 20px 0;
}

`;

const Text = styled.h2`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })};
  white-space: nowrap;
`;

const MainText = styled.h1`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })};
`;
