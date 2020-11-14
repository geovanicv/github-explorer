import React from 'react';

import followingIcon from '../../assets/user-check.svg';
import followsIcon from '../../assets/users.svg';
import repositoriesIcon from '../../assets/info.svg';

import {formatNumbers} from '../../utils/formatNumbers';

import * as S from './styles';

interface UserProps {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const ProfileUserCard = ({
  avatar_url,
  bio,
  followers,
  following,
  login,
  name,
  public_repos
}: UserProps) => {
  return (
    <S.Container>
      <header>
        <img src={avatar_url} alt="Avatar do usuário"/>
        <h2>{name}</h2>
        <span>{login}</span>
      </header>

      <p>{bio}</p>

      <main>

      <S.NumbersInfo>
          <img src={repositoriesIcon} alt="Repositórios"/>
          <strong>{formatNumbers(public_repos)}</strong>
          <span>Repositórios</span>
        </S.NumbersInfo>
        
        <S.NumbersInfo>
          <img src={followsIcon} alt="Seguidores"/>
          <strong>{formatNumbers(followers)}</strong>
          <span>Seguidores</span>
        </S.NumbersInfo>

        <S.NumbersInfo>
          <img src={followingIcon} alt="Seguindo"/>
          <strong>{formatNumbers(following)}</strong>
          <span>Seguindo</span>
        </S.NumbersInfo>
        
      </main>
    </S.Container>
  );
}

export default ProfileUserCard;