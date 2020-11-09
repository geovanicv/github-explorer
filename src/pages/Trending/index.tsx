import React from 'react';

import Header from '../../components/Header/Header';
import searchIcon from '../../assets/search.svg';

import * as S from './styles';
import TrendingCard from '../../components/TrendingCard';

const Trending = () => { 

  return (
    <S.Container>
      <Header>
        <S.TitleContent>
          <S.Title>GitHub Trending.</S.Title>
          <S.ExplorerButton>
            <img src={searchIcon} alt="explorar repositórios"/>
            Explorar
          </S.ExplorerButton>
        </S.TitleContent>
      </Header>
      <S.TrendingList>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </S.TrendingList>
     
    </S.Container>
  );
}

export default Trending;