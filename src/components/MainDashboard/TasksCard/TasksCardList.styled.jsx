import styled from 'styled-components';

export const CardContainer = styled.div`
  max-height: 63vh;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
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
