import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

//PROJECTS

const Projects = styled.section`
position: relative;
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
    Fmin: 22,
  })};

  text-align: center;
`;
const ProjectContent = styled.p`
  ${font({
    weight: 300,
    Fmax: 18,
    Fmin: 14,
  })};

  text-align: justify;
`;
const NoteTitle = styled.span`
  ${font({
    weight: 400,
    Fmax: 16,
    Fmin: 13,
  })};
`;
const NoteContent = styled.span`
  ${font({
    weight: 300,
    Fmax: 14,
    Fmin: 12,
  })};

text-align: justify;
`;

const ProjectLink = styled.a`
  ${font({
    color: `${theme.colors.linkText}`,
    weight: 400,
    Fmax: 16,
    Fmin: 13,
  })};
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }
  white-space: nowrap;
`;

export const S = {
  Projects,

  Project,
  Image,
  TextWrapper,
  ProjectTitle,
  ProjectContent,
  NoteTitle,
  NoteContent,
  ProjectLink,
};
