import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1114px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  margin-top: 4rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
  max-width: 100%;
  display: flex;

  select {
    height: 5rem;
    color: #A8A8B3;
    border: 0;
    padding: 0 12px;
    background-color: #404344;

    &:after {}
  }

  input {
    flex: 1;
    height: 5rem;
    padding: 0 2.4rem;
    border: 0;
    background-color: #404344;
    color: white;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: 21rem;
    height: 5rem;
    border-radius: 0 5px 5px 0;

    background: #16A862;
    border: 0;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const MainContent = styled.main`
  > h4 {
    padding: 0 0 1.4rem 0;
  }

  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.img`
  margin-top: 5rem;
  height: 20rem;
`;



