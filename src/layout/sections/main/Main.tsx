import mainPhoto from "../../../assets/images/photo.webp";
import { Container } from "../../../components/common/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
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
                "I'm a Frontend Developer", "I build things for web", "I make
                web-apps with React",
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
          <Tilt
            className="background-stripes track-on-window"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={mainPhoto} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </S.MainWrapper>
      </Container>
    </S.Main>
  );
};
