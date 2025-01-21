import mainPhoto from "../../../assets/images/photo.webp";
import { Container } from "../../../components/common/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";

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
            <S.MainText>
              <p>
                "I'm a Frontend Developer", 
                "I build things for web", 
                "I make web-apps with React",
              </p>
              <Typewriter
                options={{
                  strings: [
                    "I'm a Web Developer",
                    "I build things for web",
                    "I develope with React",
                  ],
                  autoStart: true,
                  loop: true,
                  // delay: 150,
                }}
              />
            </S.MainText>
          </S.TextWrapper>
          <S.PhotoWrapper>
            <S.Photo src={mainPhoto} alt="" />
          </S.PhotoWrapper>
        </S.MainWrapper>
      </Container>
    </S.Main>
  );
};
