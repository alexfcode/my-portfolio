import { FlexWrapper } from "../../../components/common/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Project_Styles";

type ProjectPropsType = {
  img: string;
  title: string;
  content: string;
  note: string;
  previewLink: string;
  codeLink: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image src={props.img} alt="Photo1" />
      <S.TextWrapper>
        <S.ProjectTitle>{props.title}</S.ProjectTitle>
        <S.ProjectContent>{props.content}</S.ProjectContent>
        <S.NoteContent>
          {<S.NoteTitle>{"TECH STACK: "}</S.NoteTitle>}
          {props.note}
        </S.NoteContent>
        <FlexWrapper justify="center" gap="48px">
          <S.ProjectLink href={props.previewLink}>
            <FlexWrapper gap="10px">
              <Icon iconId="chain" width="20" height="20" viewBox="0 0 20 20" />
              Live Preview
            </FlexWrapper>
          </S.ProjectLink>
          <S.ProjectLink href={props.codeLink}>
            <FlexWrapper gap="10px">
              <Icon
                iconId="github2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
              View Code
            </FlexWrapper>
          </S.ProjectLink>
        </FlexWrapper>
      </S.TextWrapper>
    </S.Project>
  );
};
