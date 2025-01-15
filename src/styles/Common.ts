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
