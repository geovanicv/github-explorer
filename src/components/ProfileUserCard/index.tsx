import React from 'react';

import avatar from '../../assets/avatar.png';
import followingIcon from '../../assets/user-check.svg';
import followsIcon from '../../assets/users.svg';
import repositoriesIcon from '../../assets/info.svg';

import * as S from './styles';

const ProfileUserCard = () => {
  return (
    <S.Container>
      <header>
        <img src={avatar} alt="Avatar do usuário"/>
        <h2>Geovani Cavalcante</h2>
        <span>geovanicv</span>
      </header>

      <p>Biografia</p>

      <main>

      <S.NumbersInfo>
          <img src={repositoriesIcon} alt="Repositórios"/>
          <strong>108</strong>
          <span>Repositórios</span>
        </S.NumbersInfo>
        
        <S.NumbersInfo>
          <img src={followsIcon} alt="Seguidores"/>
          <strong>108</strong>
          <span>Seguidores</span>
        </S.NumbersInfo>

        <S.NumbersInfo>
          <img src={followingIcon} alt="Seguindo"/>
          <strong>108</strong>
          <span>Seguindo</span>
        </S.NumbersInfo>
        
      </main>
    </S.Container>
  );
}

export default ProfileUserCard;