import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

type ProjectPropsType = {
  img: string;
  title: string;
  content: string;
  note: string;
  previewLink: string;
  codeLink: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.img} alt="Photo1" />
      <TextWrapper>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <NoteContent>
          {<NoteTitle>{"TECH STACK: "}</NoteTitle>}
          {props.note}
        </NoteContent>
        <FlexWrapper justify="center" gap="48px">
          <Link href={props.previewLink}>
            <FlexWrapper gap="10px">
              <Icon iconId="chain" width="20" height="20" viewBox="0 0 20 20" />
              Live Preview
            </FlexWrapper>
          </Link>
          <Link href={props.codeLink}>
            <FlexWrapper gap="10px">
              <Icon
                iconId="github2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
              View Code
            </FlexWrapper>
          </Link>
        </FlexWrapper>
      </TextWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
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

const Title = styled.h3`

${font({
    weight: 500,
    Fmax: 28,
    Fmin: 24,
  })};

  text-align: center
`;
const Content = styled.p`
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

const Link = styled.a`
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
