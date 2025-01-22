import React from "react";
import { S } from "./HeaderMenu_Styles";

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Tech Stack",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contacts",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <S.MenuLink
              activeClass="active"
              to={item.href}
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              >
              {item.title}
            </S.MenuLink>
          </li>
        );
      })}
    </ul>
  );
};
