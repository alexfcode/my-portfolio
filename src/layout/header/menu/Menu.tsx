import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
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
          <li>
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const Link = styled.a`
  font-family: "DM Sans";
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.secondaryFont};
`;
