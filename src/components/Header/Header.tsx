import React from 'react';

import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import arrowLeftIcon from '../../assets/arrow-left.svg';

import * as S from './styles';

type Props = {
  haveButtonBack?: string;
  children?: React.ReactNode;
}

const Header = ({children, haveButtonBack}: Props) => {
  
  return (
    <S.Container>
      <S.NavContent>
        <img src={logoImg} alt="github explorer"/>
        {haveButtonBack ? (
          <Link to={haveButtonBack}>
            <img src={arrowLeftIcon} alt="Voltar"/>Voltar
          </Link>
        ) : (
          <div />
        )}
      </S.NavContent>
      {children}
    </S.Container>
  );
}

export default Header;