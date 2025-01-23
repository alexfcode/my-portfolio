import { Icon } from "../icon/Icon";
import { S } from "./Logo_Styles";
import { animateScroll as scroll } from "react-scroll";

type LogoPropsType = {
    iconId: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
  return (
    <S.Logo
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon iconId={props.iconId} width="97" height="30" viewBox="0 0 97 30" />
    </S.Logo>
  );
};