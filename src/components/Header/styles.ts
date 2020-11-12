import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;  
  padding: 20px 0;
`;

export const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a { 
    background: transparent;
    border: 0;
    color: #A8A8B3;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      margin-right: 12px;
    }
  }
`;


  



