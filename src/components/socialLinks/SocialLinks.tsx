import { Icon } from "../icon/Icon";
import { S } from "./SocialLinks_Styles";

const linksData = [
  {
    href: "https://github.com/alexfcode",
    iconId: "github_big",
  },
  {
    href: "https://t.me/fateev_a_v",
    iconId: "telegram",
  },
  {
    href: "https://linkedin.com/in/fateevalexey",
    iconId: "linkedin",
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <S.SocialLinks>
      <ul>
        {linksData.map((l, index) => {
          return (
            <li key={index}>
              <S.Link href={l.href}>
                <Icon
                  iconId={l.iconId}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                />
              </S.Link>
            </li>
          );
        })}
      </ul>
    </S.SocialLinks>
  );
};
