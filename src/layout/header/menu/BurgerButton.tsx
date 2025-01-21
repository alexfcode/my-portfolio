import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { S } from "./HeaderMenu_Styles";

type BurgerButtonPropsType = {
  isOpen: boolean;
};

export const BurgerButton = (props: BurgerButtonPropsType) => {
  return (
    <S.BurgerButton>
      <div>{props.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
    </S.BurgerButton>
  );
};

