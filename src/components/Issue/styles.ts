import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  
  padding: 2rem;

  background: #323538;
  height: 12rem;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  font-size: 1.4rem;
`;

export const IssueCode = styled.span`
`;

export const LabelsContent = styled.div`
`;

export const Label = styled.span`
  background: ${props => props.color || '#C4C4C4'};
  color: #000;

  margin-left: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 2rem;

`;

export const IssueContent = styled.main`
  display: flex;
  align-items: center;
`;

export const Author = styled.span`
  font-size: 1.4rem;
  text-align: end;
`;


export const IssueIcon = styled.img`
  margin-right: 1rem;
  height: 4rem;
`;

export const IssueTitle = styled.strong``;
