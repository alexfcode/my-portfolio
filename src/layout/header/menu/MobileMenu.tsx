import { BurgerButton } from "./BurgerButton";
import { Menu } from "./Menu";
import { S } from "./HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileNav>
      <BurgerButton isOpen={false} />
      <S.MobileMenuPopup isOpen={false}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileNav>
  );
};


