import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const skillsList = [
  {
    iconId: "html",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 1,
  },
  {
    iconId: "github-proj",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 2,
  },
  {
    iconId: "greenshock",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 3,
  },
  {
    iconId: "bootstrap",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 11,
  },
  {
    iconId: "git",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 4,
  },
  {
    iconId: "react",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 5,
  },
  {
    iconId: "sass",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 6,
  },
  {
    iconId: "redux",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 7,
  },
  {
    iconId: "css",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 8,
  },
  {
    iconId: "js",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 9,
  },
  {
    iconId: "tailwind",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 10,
  },
  {
    iconId: "vscode",
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    index: 12,
  },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <Title>My Tech Stack</Title>
        <SubTitle> Technologies I’ve been working with recently</SubTitle>
        <FlexWrapper wrap="wrap" gap="50px 0">
          {skillsList.map((s, index) => {
            return (
              <Icon
                iconId={s.iconId}
                width={"16.66%"}
                height={s.height}
                viewBox={s.viewBox}
                key={s.index}
              />
            );
          })
          }
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  `;

const Title = styled.h2`

${font({
    color: "${theme.colors.mainSectionFont}",
    weight: 700,
    Fmax: 48,
    Fmin: 27,
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
    weight: 400,
    Fmax: 32,
    Fmin: 24,
  })};

text-align: center;
margin-bottom: 120px;

@media ${theme.media.mobile} {
  margin-bottom: 80px;
}
`;
