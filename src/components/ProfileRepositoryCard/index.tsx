import React from 'react';

import starIcon from '../../assets/star.svg';
import forkIcon from '../../assets/fork.svg';
import issueIcon from '../../assets/info.svg';

import * as S from './styles';

const ProfileRepositoryCard = () => {
  return (
    <S.Container>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/43452376?s=460&u=bc6a05011237f59f3136488213d8f619843aab46&v=4" alt="Avatar do usuário"/>
        <h2>geovanicv/happy-api</h2>
        <span>Descrição do repositório</span>
      </header>
      <main>
        <S.NumbersInfo>
          <img src={starIcon} alt="Estrela"/>
          <strong>108</strong>
          <span>Stars</span>
        </S.NumbersInfo>
        <S.NumbersInfo>
          <img src={forkIcon} alt="Estrela"/>
          <strong>108</strong>
          <span>Forks</span>
        </S.NumbersInfo>
        <S.NumbersInfo>
          <img src={issueIcon} alt="Estrela"/>
          <strong>108</strong>
          <span>Issues</span>
        </S.NumbersInfo>
      </main>
    </S.Container>
  );
}

export default ProfileRepositoryCard;