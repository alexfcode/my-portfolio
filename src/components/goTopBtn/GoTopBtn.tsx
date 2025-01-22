import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => scroll.scrollToTop({
            duration: 500,
            smooth: true,
        })}>
          <Icon
            iconId={"arrowGoTop"}
            height={"15"}
            width={"15"}
            viewBox={"00 16 15"}
          />
        </StyledGoTopBtn>
      )}

      <button></button>
    </>
  );
};

const StyledGoTopBtn = styled.button`
  color: #ffffffd3;
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
