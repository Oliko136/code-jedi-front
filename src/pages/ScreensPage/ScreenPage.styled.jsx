import styled from 'styled-components';

export const CreatedBoard = styled.div`
  padding: 10px;
`;
export const CreateBoard = styled.button`
  color: #bedbb0;
  transition: text-decoration 450ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
export const FilterButton = styled.button`
  display: flex;
  width: 64px;
  height: 20px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  gap: 6px;
  color: #321212;
  border: none;
  background: transparent;

  &:hover {
    stroke: #bedbb0;
  }
`;
export const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px; 
`;
export const TextDiv = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
`;

export const ContainerFilter = styled.div`
  display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
`;