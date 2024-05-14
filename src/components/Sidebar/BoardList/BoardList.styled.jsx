import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const timingFunction = 'cubic-bezier(0.42, 0, 0.58, 1)';

export const BoardListContainer = styled.ul`
  list-style: none;
`;

export const BoardItem = styled.li`
  display: block;

  justify-content: space-between;
  height: 61px;
  align-items: center;

  position: relative;

  overflow: hidden;

  &:hover,
  &:focus {
    background-color: var(--primary-bg-color);

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      width: 4px;
      border-radius: 0px 4px 4px 0px;
      border-left: 4px solid transparent;
      border-right: 4px solid var(--accent-icon-color);
      animation: ${fadeInAnimation} 0.3s ${timingFunction} forwards;
    }
  }

  &.activeBoard {
    background-color: var(--primary-bg-color);

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      width: 4px;
      border-radius: 0px 4px 4px 0px;
      border-left: 4px solid transparent;
      border-right: 4px solid var(--accent-icon-color);
      animation: ${fadeInAnimation} 0.3s ${timingFunction} forwards;
    }
  }
`;
