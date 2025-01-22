import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  padding-bottom: 60px;
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;

const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
  }
`;

const BottomFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const PhoneNumber = styled.span`
  display: block;
`;

const Email = styled.span`
  display: block;

  font-family: "DM Sans";

  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DesignedBy = styled.span`
  display: inline-block;
  margin-left: auto;
  background: var(
    --Gradient-Heading,
    linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  span {
    -webkit-text-fill-color: ${theme.colors.primeFont};
  }
`;

export const S = {
  Footer,
  TopFooterWrapper,
  BottomFooterWrapper,
  PhoneNumber,
  Email,
  DesignedBy,
};
