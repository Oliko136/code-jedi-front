import styled from 'styled-components';

export const AddColumnButton = styled.button`
  display: flex;
  height: 56px;
  padding: 12px 79px;
  background-color: black;
  color: #fff;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
  transition: 350ms ease-in-out;
  &:hover {
    background-color: #121212;
  }
`;

export const IconPlus = styled.svg`
  background-color: #fff;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  stroke: black;
  padding: 5px 7px 8px 6px;
`;