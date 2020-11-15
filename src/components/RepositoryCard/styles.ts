import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.4rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateX(1rem);
  }

  button {
    background: transparent;
    border: 0;
  }

`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 550px;
  width: 100%;
  
  padding: 2rem;
  margin-right: 2rem;
  border-radius: 5px;
  background: #323538;
  color: #A1A4A8;

 > img {
    padding: 5px;
    border: 3px solid #fff;
    border-radius: 50%;
    height: 11.2rem;
    width: 11.2rem;
    margin-right: 3.5rem; 
  }

  @media (max-width: 650px) {
    flex-direction: column;
    min-width: 200px;
    gap: 1.4rem;

    > img {
      padding: 3px;
      height: 6.2rem;
      width: 6.2rem;
      margin: 0;
    }

  }
`;

export const CardInfos = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 2.4rem;
    color: #fff;
  }

  @media (max-width: 650px) {
    align-items: center;
    text-align: center;

    h1 { 
      margin-bottom: 0.6rem;
    }
  }

`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 650px) {
    margin-top: 1.4rem;
  }

`;
export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.2rem;


  img {
    margin-right: 0.6rem;
  }
`;
export const Forks = styled(Stars)``;
export const Language = styled.div`
  margin-right: 2.2rem;
`;
export const BuildBy = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.6rem;
  }

  @media (max-width: 800px) {
    display: none;
  }

`;
export const BuildByAvatars = styled.div`
  img {
    margin-right: 0.4rem;
    height: 3.7rem;
    width: 3.7rem; 
    border-radius: 50%;
    border: 3px solid white;
    margin-right: -10px;
  }

`;

