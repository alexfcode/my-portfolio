import React from "react";
import styled from "styled-components";
import { Project } from "../projects/Project";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Photo1 from "../../../assets/images/projects/work1.webp";
import Photo2 from "../../../assets/images/projects/work2.webp";
import Photo3 from "../../../assets/images/projects/work3.webp";
import Photo4 from "../../../assets/images/projects/work4.webp";
import Photo5 from "../../../assets/images/projects/work5.webp";
import Photo6 from "../../../assets/images/projects/work6.webp";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const projectsList = [
  {
    img: Photo1,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "1",
  },
  {
    img: Photo2,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "2",
  },
  {
    img: Photo3,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "3",
  },
  {
    img: Photo4,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "4",
  },
  {
    img: Photo5,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "5",
  },
  {
    img: Photo6,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "6",
  },
  {
    img: Photo6,
    title: "Project Tile goes here",
    content:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    note: "Tech stack : HTML , JavaScript, SASS, React",
    previewLink: "#",
    codeLink: "#",
    index: "6",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        {/* <FlexWrapper direction="column" justify="space-between"> */}
          <Title>Projects</Title>
          <Text>Things I’ve built so far</Text>
          <FlexWrapper wrap="wrap" gap="65px 46px">
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
          </FlexWrapper>
        {/* </FlexWrapper> */}
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 80vh;
  padding-bottom: 180px;
`;

const Title = styled.h2`
text-align: center;
color: ${theme.colors.titleFont};
font-size: 48px;
margin: 0 auto;
margin-bottom: 40px;
`;

const Text = styled.p`
text-align: center;
color: ${theme.colors.mainSectionFont};
font-size: 32px;
margin: 0 auto;
margin-bottom: 140px;
`;