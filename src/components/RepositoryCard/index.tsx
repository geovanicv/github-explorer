import React, { useEffect, useState } from 'react';

import xIcon from '../../assets/x-circle.svg';
import starIcon from '../../assets/star.svg';
import forkIcon from '../../assets/fork.svg';
import arrowIcon from '../../assets/arrow-right.svg';

import {api} from '../../api';
import  {formatNumbers} from '../../utils/formatNumbers';

import * as S from './styles';
import { Link } from 'react-router-dom';

interface RepositoryCardProps {
  id: number;
  html_url: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  owner: {
    avatar_url: string;
  }
  handleExcludeRepository(id: number): void;
}

interface Contributors {
  login: string;
  avatar_url: string;
  html_url: string;
}

const RepositoryCard = ({
  id,
  full_name, 
  description, 
  stargazers_count, 
  forks_count, 
  language,
  owner,
  handleExcludeRepository
}: RepositoryCardProps) => {
  const [contributors, setContributors] = useState<Contributors[]>([]);


  useEffect(() => {
    async function handleFetchContributors() {
      const response = await fetch(`${api}/repos/${full_name}/contributors`);
      const data: Contributors[] = await response.json();

      const firstContributors = data.filter((item, index) => index < 4);
  
      setContributors(firstContributors)   
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
              {formatNumbers(stargazers_count)}
            </S.Stars>
            <S.Forks>
              <img src={forkIcon} alt="Forks"/>
              {formatNumbers(forks_count)}
            </S.Forks>
            <S.Language>
              {language}
            </S.Language>
            <S.BuildBy>
              <p>Built by</p> 
              <S.BuildByAvatars>
                {contributors.map(c => (
                  <a key={c.login} href={c.html_url}>
                    <img src={c.avatar_url} alt="Avatar"/>
                  </a>
                ))}
              </S.BuildByAvatars>
            </S.BuildBy>
          </S.CardFooter>
        </S.CardInfos>
        <Link to={`/repository/${full_name}`}>
          <img src={arrowIcon} alt="Apagar"/>
        </Link>
      </S.Card>
      <button onClick={() => handleExcludeRepository(id)}>
        <img src={xIcon} alt="Apagar"/>
      </button>
    </S.Container>
  )
}

export default RepositoryCard;