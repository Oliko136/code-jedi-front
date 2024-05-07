import styled from 'styled-components';

export const BoardListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BoardItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 61px;
  align-items: center;
  padding: 20px 24px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #bedbb0;
  }
`;
