import styled from 'styled-components';

export const ContainerMainBoard = styled.div`
  display: flex;
  gap: 18px;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 105%;

  &::-webkit-scrollbar {
    height: 12px;
    position: absolute;
    left: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(12, 12, 12, 0.5);
    border-radius: 12px;
  }
`;
