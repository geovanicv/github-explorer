import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 35.0rem;
  min-width: 30rem;
  height: 33.5rem;
  background: #202224;
  padding: 18px 25px;
  border-radius: 10px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 11.2rem;
    width: 11.2rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  line-height: 3rem;
  color: #A8A8B3;
  font-size: 1.6rem; 
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
   
   img {
     margin-right: 12px;
   }
`;
export const Forks = styled(Stars)``;

export const Language = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const MainContent = styled.main`
`;

export const RepositoryName = styled.button`
  background: transparent;
  font-size: 2.4rem;
  border: 0;
  color: #fff;
  font-weight: bold;
`;

export const RepositoryDescription = styled.p`
  margin-top: 1.2rem;
  color: #A8A8B3;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersAvatars = styled.div`
  img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
  }
`;
export const StarsToday = styled.span`
  font-weight: bold;
  color: #A8A8B3;
`;




