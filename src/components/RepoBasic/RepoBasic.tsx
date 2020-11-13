import React from 'react';

import codeIcon from '../../assets/code.svg';
import * as S from './styles';

const RepoBasic = () => {
  return (
    <S.Container>
      <S.RepoName>happy-web</S.RepoName>
      <S.RepoDescription>Descrição do repositório</S.RepoDescription> 
      <S.RepoLanguage>
        <img src={codeIcon} alt="Linguagem"/>
        Language
      </S.RepoLanguage>
    </S.Container>
  );
}

export default RepoBasic;