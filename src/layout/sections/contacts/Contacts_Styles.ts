import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Contacts = styled.section``;

const Title = styled.h2`
  ${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 48,
    Fmin: 27,
  })};

  text-align: center;
  margin-bottom: 100px;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`;

export const S = {
  Contacts,
  Title,
};
