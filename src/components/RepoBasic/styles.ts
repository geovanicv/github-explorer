import styled from 'styled-components';

export const Container = styled.div`
  background: #323538;
  width: 100%;
  min-height: 12rem;
  border-radius: 5px;
  padding: 1.6rem 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;
