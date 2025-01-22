import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  padding-top: 36px;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  opacity: 0.7;
`;

export const S = {
  Header,
};
