import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

//PROJECTS

const Projects = styled.section``;

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

//PROJECT

const Project = styled.div`
  max-width: 375px;
  min-height: 567px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: #363636;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  gap: 15px;

  line-height: 26px;
`;

const ProjectTitle = styled.h3`
  ${font({
    weight: 500,
    Fmax: 28,
    Fmin: 24,
  })};

  text-align: center;
`;
const ProjectContent = styled.p`
  ${font({
    weight: 300,
    Fmax: 18,
    Fmin: 16,
  })};
`;
const NoteTitle = styled.span`
  ${font({
    weight: 400,
    Fmax: 16,
    Fmin: 14,
  })};
`;
const NoteContent = styled.span`
  ${font({
    weight: 300,
    Fmax: 14,
    Fmin: 12,
  })};
`;

const ProjectLink = styled.a`
  ${font({
    color: "${theme.colors.linkText}",
    weight: 400,
    Fmax: 16,
    Fmin: 14,
  })};
  color: ${theme.colors.linkText};
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }
  white-space: nowrap;
`;

export const S = {
  Projects,
  Title,
  SubTitle,

  Project,
  Image,
  TextWrapper,
  ProjectTitle,
  ProjectContent,
  NoteTitle,
  NoteContent,
  ProjectLink,
};
