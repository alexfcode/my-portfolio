import { Container } from "../../../components/common/Container";
import { Form } from "../../../components/form/Form";
import { S } from "./Contacts_Styles";
import { Title } from "../../../styles/Common";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <Title>For any questions please contact me:</Title>
        <Form />
      </Container>
    </S.Contacts>
  );
};
