import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header/Header';
import RepositoryCard from '../../components/RepositoryCard';
import UserCard from '../../components/UserCard';

import {api} from '../../api';
import * as S from './styles';

interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
  owner: {
    avatar_url: string;
  }
}

const Explorer = () => {
  const [filter, setFilter] = useState('repos');
  const [newSearch, setNewSearch] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch(`${api}/${filter}/${newSearch}`);
    const data = await response.json();

      filter === 'repos' 
      ? setRepositories([...repositories, data])
      : setUsers([...users, data]);
    
    setNewSearch('');
  }

  return (
    <S.Container>
      <Header>
        <S.Title>Explore no Github.</S.Title>
        <S.Form onSubmit={handleSearch}>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="repos">Repositórios</option>
            <option value="users">Usuários</option>
          </select>
          <input 
            type="text" 
            placeholder="Digite aqui" 
            value={newSearch} 
            onChange={e => setNewSearch(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </Header>

      <S.MainContent>
        <h4>Recentes</h4>
        {
          filter === 'repos'
          ? repositories.map(repo => (
            <RepositoryCard
              key={repo.id}
              full_name={repo.full_name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              language={repo.language}
              owner={repo.owner}
            />
          )).reverse()
          : users.map(user => (
            <UserCard 
              key={user.login}
              login={user.login}
              avatar_url={user.avatar_url}
              name={user.name}
              bio={user.bio}
            />
          )).reverse()
        }
      </S.MainContent>
    </S.Container>
  );
}

export default Explorer;