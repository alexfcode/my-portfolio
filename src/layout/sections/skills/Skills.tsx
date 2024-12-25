import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

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
        <FlexWrapper wrap="wrap" gap="70px 0">
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
  padding-bottom: 200px;
`;

const Title = styled.h2`
font-size: 48px;

text-align: center;
margin-bottom: 50px;
`;

const SubTitle = styled.h3`
color: ${theme.colors.secondaryFont};
font-size: 32px;

text-align: center;
margin-bottom: 140px;
`;
