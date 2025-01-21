import styled from "styled-components";
import { theme } from "./Theme";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmax,
  Fmin,
}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primeFont};
    line-height: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, ( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)
`;

export const Title = styled.h2`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 48,
    Fmin: 32,
  })};

  text-align: center;
  margin-bottom: 50px;

  @media ${theme.media.mobile} {
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.h3`
  ${font({
    color: "${theme.colors.secondaryFont}",
    weight: 700,
    Fmax: 32,
    Fmin: 24,
  })};

  text-align: center;
  margin-bottom: 100px;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`;

