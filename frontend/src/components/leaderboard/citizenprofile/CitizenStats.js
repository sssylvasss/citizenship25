import React from 'react';

import { RankingProgress } from '../../profile/RankingProgress';
import { 
  ImageNameContainer, 
  ProfileAvatar, 
  StatusContainer, 
  Username, 
  BadgesText,
  CoinsText,
  BadgeIcon,
  CoinsIcon } from './Styling';

  export const CitizenStats = ({ 
    avatar, 
    username, 
    ranking, 
    badges, 
    coins }) => {
    return (
      <ImageNameContainer>
        <ProfileAvatar src={avatar} />
        <Username>{username}</Username>
        <RankingProgress 
          ranking={ranking} />
        <StatusContainer>
          <BadgesText>
            <BadgeIcon src={require(`../../../assets/badge.png`)} /> 
              {badges}
            </BadgesText>
          <CoinsText>
            {coins}
            <CoinsIcon src={require(`../../../assets/money2.png`)} /> 
          </CoinsText>
        </StatusContainer>
      </ImageNameContainer>
    )
  };