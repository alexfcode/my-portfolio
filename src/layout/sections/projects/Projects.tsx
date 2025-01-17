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
import { font } from "../../../styles/Common";

const projectsList = [
  {
    img: Photo1,
    title: "Project Title goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "1",
  },
  {
    img: Photo2,
    title: "Project Title goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "2",
  },
  {
    img: Photo3,
    title: "Project Title goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "3",
  },
  {
    img: Photo4,
    title: "Project Title goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "4",
  },
  {
    img: Photo5,
    title: "Project Title goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "5",
  },
  {
    img: Photo6,
    title: "Project Title goes here",
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
  margin-bottom: 110px;

  @media ${theme.media.mobile} {
  margin-bottom: 80px;
}
`;


