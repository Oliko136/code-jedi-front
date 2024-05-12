import styled from 'styled-components';

export const BoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  position: relative;
  width: 100%;
`;

export const BoardItemTitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  stroke: var(--primary-text-color);
  fill: none;
  animation: scaleAndRotate 5s infinite alternate;
`;

export const BoardTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`;

export const BoardItemButtonsBlock = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoardBtnSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-text-color);
  fill: none;
`;

export const HoverBoardBtnSvg = styled(BoardBtnSvg)`
  &:hover {
    stroke: var(--primary-text-color); /* Білий обведення при наведенні */
  }
`;

export const BoardBtn = styled.button``;
