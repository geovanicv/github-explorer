import styled from 'styled-components';

export const Container = styled.aside`
  width: 34rem;
  min-height: 42rem;
  max-height: 62rem;
  background: #4A4D4F;
  border-radius: 1rem;
  padding: 0 3.5rem;


  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3rem;
    text-align: center;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      padding: 0.4rem;
      border: 3px solid #fff;
      margin-bottom: 2rem;
    }

    h2 {

    }

    span {
      margin-top: 1.4rem;
      text-align: center;
      line-height: 2rem;
    }

  }

  main {
    width: 100%;
    display: flex;
    justify-content: space-around;

  }
  

`;

export const NumbersInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 2.2rem;
  }

  strong {
    margin: 1rem 0;
    font-size: 1.8rem;
  }

  span {
    font-size: 1.4rem;
  }
`;
