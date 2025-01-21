import { Menu } from "./Menu";
import { S } from "./HeaderMenu_Styles";
import React, { useState } from "react";
import { BurgerButton } from "./BurgerButton"


export const MobileMenu: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) };

  return (
    <S.MobileNav>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}/>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileNav>
  );
};