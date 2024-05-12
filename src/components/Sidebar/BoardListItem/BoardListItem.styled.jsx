import styled from 'styled-components';

export const BoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  position: relative;
  width: 100%;
  max-width: 260px;
  @media screen and (min-width: 768px) {
    padding: 24px 24px;
  }
`;

export const BoardItemTitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 260px;
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;

  fill: none;
  animation: scaleAndRotate 5s infinite alternate;
  stroke: ${props =>
    props.isHovered || props.isActive
      ? 'var(--primary-text-color)'
      : 'var(--calendar-additional-color-trans)'};
`;

export const BoardTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${props =>
    props.isHovered || props.isActive
      ? 'var(--primary-text-color)'
      : 'var(--calendar-additional-color-trans)'};
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
  stroke: ${props =>
    props.isHovered || props.isActive
      ? 'var(--primary-text-color)'
      : 'var(--calendar-additional-color-trans)'};
`;

export const HoverBoardBtnSvg = styled(BoardBtnSvg)``;

export const BoardBtn = styled.button``;
export const ActiveTitleBlock = styled(BoardItemTitleBlock)`
  color: var(--primary-text-color);
`;
