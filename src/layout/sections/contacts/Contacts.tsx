import { Container } from "../../../components/Container";
import { Form } from "../../../components/Form";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <S.Title>For any questions please contact me:</S.Title>
        <Form />
      </Container>
    </S.Contacts>
  );
};
