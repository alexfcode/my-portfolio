import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const Skills = styled.section``;

const Title = styled.h2`
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

const SubTitle = styled.h3`
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

export const S = {
  Skills,
  Title,
  SubTitle,
};
