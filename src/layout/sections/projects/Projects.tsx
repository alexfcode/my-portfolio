import styled from "styled-components";
import { Project } from "../projects/Project";
import Photo1 from "../../../assets/images/projects/work1.webp";
import Photo2 from "../../../assets/images/projects/work2.webp";
import Photo3 from "../../../assets/images/projects/work3.webp";
import Photo4 from "../../../assets/images/projects/work4.webp";
import Photo5 from "../../../assets/images/projects/work5.webp";
import Photo6 from "../../../assets/images/projects/work6.webp";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { GridWrapper } from "../../../components/GridWrapper";

const projectsList = [
  {
    img: Photo1,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "1",
  },
  {
    img: Photo2,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "2",
  },
  {
    img: Photo3,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "3",
  },
  {
    img: Photo4,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "4",
  },
  {
    img: Photo5,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "5",
  },
  {
    img: Photo6,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "6",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <Title>Projects</Title>
        <SubTitle>Things I’ve built so far</SubTitle>

        <GridWrapper>
        {projectsList.map((p, index) => {
              return (
                <Project
                  // index={p.index}
                  img={p.img}
                  title={p.title}
                  note={p.note}
                  previewLink={p.previewLink}
                  codeLink={p.codeLink}
                  content={p.content}
                  key={p.index}
                />
              );
            })}
        </GridWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding-bottom: 180px;
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
  margin-bottom: 110px;
`;


