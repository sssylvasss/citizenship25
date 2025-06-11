import {
  ImageNameContainer,
  ProfileAvatar,
  StatusContainer,
  Username,
  BadgesText,
  CoinsText,
  BadgeIcon,
  CoinsIcon,
} from "./Styling";
import { RankingProgress } from "./RankingProgress";

export const ProfileStats = ({ avatar, username, badges, coins, ranking }) => {
  return (
    <ImageNameContainer>
      <ProfileAvatar src={avatar} />
      <Username>{username}</Username>
      <RankingProgress ranking={ranking} />
      <StatusContainer>
        <BadgesText>
          <BadgeIcon src={require(`../../assets/badge.png`)} />
          {badges}
        </BadgesText>
        <CoinsText>
          {coins}
          <CoinsIcon src={require(`../../assets/money2.png`)} />
        </CoinsText>
      </StatusContainer>
    </ImageNameContainer>
  );
};
