import { S } from "./Form_Styles";

export const Form: React.FC = () => {
  return (
    <S.Form>
      <S.Input placeholder={"Name"}></S.Input>
      <S.Input placeholder={"Subject"}></S.Input>
      <S.Input as={"textarea"} placeholder={"Message"}></S.Input>
      <S.Button type={"submit"}>SEND MESSAGE</S.Button>
    </S.Form>
  );
};
