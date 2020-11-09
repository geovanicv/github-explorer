import React from 'react';

import userAvatar from '../../assets/avatar.png';
import starIcon from '../../assets/star.svg';
import forkIcon from '../../assets/fork.svg';

import * as S from './styles';

const TrendingCard = () => {
  return (
    <S.Container>
      <S.Header>
          <img src={userAvatar} alt="Usuário"/>
        <S.RightContent>
          <S.Stars>
            <img src={starIcon} alt="estrelas"/>
            225
          </S.Stars>
          <S.Forks>
          <img src={forkIcon} alt="estrelas"/>
            220
          </S.Forks>
          <S.Language>
            Javascript
          </S.Language>
        </S.RightContent>
      </S.Header>
      
      <S.MainContent>
        <S.RepositoryName>geovanicv / github-explorer</S.RepositoryName>
        <S.RepositoryDescription>Quantitative research and educational materials</S.RepositoryDescription>
      </S.MainContent>

      <S.Footer>
        <S.UsersAvatars>
          <img src={userAvatar} alt="user1"/>
          <img src={userAvatar} alt="user2"/>
        </S.UsersAvatars>
        <S.StarsToday>
          91 stars today
        </S.StarsToday>
      </S.Footer>
    </S.Container>
  )
}

export default TrendingCard;