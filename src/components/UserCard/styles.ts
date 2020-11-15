import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.2rem;

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
  justify-content: center;

  @media (max-width: 650px) {
    align-items: center;
    text-align: center;
  }
 
`;

export const Username = styled.div`
   margin-bottom: 1.6rem;
   
   h1 {
    font-size: 2.4rem;
    color: #fff;
  }
  span {
      font-size: 1.4rem;
     }

  @media (max-width: 650px) {
  text-align: center;
  }

`;

