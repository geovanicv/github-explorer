import React from 'react';

import codeIcon from '../../assets/code.svg';
import * as S from './styles';

interface RepoProps {
  name: string;
  description: string;
  language: string;
  full_name: string;
}

const RepoBasic = ({
  description,
  language,
  name,
  full_name,
}: RepoProps) => {
  return (
    <S.Container to={`/repository/${full_name}`}>
      <S.RepoName>{name}</S.RepoName>
      <S.RepoDescription>{description}</S.RepoDescription> 
      <S.RepoLanguage>
        <img src={codeIcon} alt="Linguagem"/>
        {language}
      </S.RepoLanguage>
    </S.Container>
  );
}

export default RepoBasic;