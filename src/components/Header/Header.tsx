import React from 'react';

import logoImg from '../../assets/logo.svg';
import arrowLeftIcon from '../../assets/arrow-left.svg';

import * as S from './styles';

type Props = {
  haveButtonBack?: boolean;
  children?: React.ReactNode;
}

const Header = ({children, haveButtonBack}: Props) => {
  return (
    <S.Container>
      <S.NavContent>
        <img src={logoImg} alt="github explorer"/>
        {haveButtonBack ? (
           <S.BackButton>
           <img src={arrowLeftIcon} alt="Voltar"/>Voltar
         </S.BackButton>
        ) : (
          <div />
        )}
      </S.NavContent>
      {children}
    </S.Container>
  );
}

export default Header;