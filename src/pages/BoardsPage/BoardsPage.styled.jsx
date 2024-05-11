import styled from 'styled-components';

export const Board = styled.div`
  overflow: hidden;
  padding: 10px 24px;
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;

  @media screen (max-width: 375px) {
    font-size: 14px;
  }
`;
