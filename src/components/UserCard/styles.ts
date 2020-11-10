import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 15.2rem;
  display: flex;
  margin-bottom: 1.2rem;

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
`;

export const CardInfos = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

 
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

`;

