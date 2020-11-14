import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  background: #323538;
  width: 100%;
  height: 14rem;
  border-radius: 5px;
  padding: 1.6rem 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-decoration: none;
  color: #fff;

  transition: transform 0.2s;
  
  &:hover {
    transform: translateX(1rem);
  }
`;

export const RepoName = styled.strong`
  font-size: 2rem;
`;

export const RepoDescription = styled.p`
`;

export const RepoLanguage = styled.span`
  img {
    margin-right: 1.2rem;
  }

  color: #A1A4A8;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;
