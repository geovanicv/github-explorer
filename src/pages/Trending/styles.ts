import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1114px;
  margin: 0 auto;
  padding: 0 2rem;
`;


export const TitleContent = styled.div`
  padding: 9rem 0;


  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
`;

export const ExplorerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18rem;
  height: 5rem;
  border-radius: 5px;

  background: #16A862;
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-right: 12px;
  }
`;


export const TrendingList = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

