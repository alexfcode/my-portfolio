import mainPhoto from "../../../assets/images/photo.webp";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <S.MainWrapper>
          <S.TextWrapper>
            <S.Text>
              Hi 👋,
              <br />
              My name is
            </S.Text>
            <S.Name>Pavan MG</S.Name>
            <S.MainText>I build things for web</S.MainText>
          </S.TextWrapper>
          <S.PhotoWrapper>
            <S.Photo src={mainPhoto} alt="" />
          </S.PhotoWrapper>
        </S.MainWrapper>
      </Container>
    </S.Main>
  );
};


