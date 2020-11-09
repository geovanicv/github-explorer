import React, { useEffect, useState } from 'react';

import xIcon from '../../assets/x-circle.svg';
import starIcon from '../../assets/star.svg';
import forkIcon from '../../assets/fork.svg';
import arrowIcon from '../../assets/arrow-right.svg';

import {api} from '../../api';

import * as S from './styles';

interface RepositoryCardProps {
  full_name: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
  owner: {
    avatar_url: string;
  }
}

interface Contributors {
  login: string;
  avatar_url: string;
}

const RepositoryCard = ({
  full_name, 
  description, 
  stargazers_count, 
  forks_count, 
  language,
  owner,
}: RepositoryCardProps) => {
  const [contributors, setContributors] = useState<Contributors[]>([]);


  useEffect(() => {
    async function handleFetchContributors() {
      const response = await fetch(`${api}/repos/${full_name}/contributors`);
      const data = await response.json();
  
      setContributors(data)   
    }
    handleFetchContributors();
  }, [full_name])

 
  
    return (
    <S.Container>
      <S.Card>
        <img src={owner.avatar_url} alt="Avatar"/>
        <S.CardInfos>
          <h1>{full_name}</h1>
          <p>{description}</p>
          <S.CardFooter>
            <S.Stars>
              <img src={starIcon} alt="Estrelas"/>
              {stargazers_count}
            </S.Stars>
            <S.Forks>
              <img src={forkIcon} alt="Forks"/>
              {forks_count}
            </S.Forks>
            <S.Language>
              {language}
            </S.Language>
            <S.BuildBy>
              <p>Build by</p> 
              <S.BuildByAvatars>
                {contributors.map(c => (
                  <img key={c.login} src={c.avatar_url} alt="Avatar"/>
                ))}
              </S.BuildByAvatars>
            </S.BuildBy>
          </S.CardFooter>
        </S.CardInfos>
        <a href="/">
          <img src={arrowIcon} alt="Apagar"/>
        </a>
      </S.Card>
      <img src={xIcon} alt="Apagar"/>
    </S.Container>
  )
}

export default RepositoryCard;