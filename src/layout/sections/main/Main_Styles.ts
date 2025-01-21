import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;

  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 100px;
  }
`;

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`;

const TextWrapper = styled.div`
  justify-content: center;

  @media ${theme.media.tablet} {
    flex: 1;
    justify-content: flex-start;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
  }
`;

const Photo = styled.img`
  width: 350x;
  height: 350px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(#e70faa, #00c0fd) border-box;
  border: 9px solid transparent;
  border-radius: 50%;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 320x;
    height: 320px;
  }
`;

const Name = styled.h2`
  ${font({
    color: `${theme.colors.mainSectionFont}`,
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
    color: `${theme.colors.mainSectionFont}`,
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })};
`;

const MainText = styled.h1`
  ${font({
    color: `${theme.colors.mainSectionFont}`,
    weight: 700,
    Fmax: 58,
    Fmin: 36,
  })};

  p {
    display: none;
  }
`;

export const S = {
  MainWrapper,
  Main,
  TextWrapper,
  PhotoWrapper,
  Photo,
  Name,
  Text,
  MainText,
};
