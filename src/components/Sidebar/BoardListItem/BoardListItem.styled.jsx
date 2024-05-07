import styled from 'styled-components';

export const BoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 61px;
  align-items: center;
  padding: 20px 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    border-right: 4px solid transparent;
  }

  &:hover,
  &:focus {
    background-color: #2d2d2d; /* Dark gray background on hover/focus */
    cursor: pointer;

    &::after {
      border-right: 4px solid #7b7b7b; /* Dark gray border on hover/focus */
    }

    .boardTitle {
      color: #fff; /* White text on hover/focus */
      z-index: 5;
    }

    .boardIcon {
      stroke: #fff; /* White icon on hover/focus */
    }

    .boardItemButtonsBlock {
      display: flex;
    }

    .boardBtn {
      display: block;
    }
  }
`;

export const BoardItemTitleBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  stroke: #bedbb0; /* Light green icon color */
  fill: none;
  animation: scaleAndRotate 5s infinite alternate;
`;

export const BoardTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #bedbb0; /* Light green text color */
`;

export const BoardItemButtonsBlock = styled.ul`
  display: flex;
  gap: 8px;
`;

export const BoardBtn = styled.button`
  display: none;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
`;

export const BoardBtnSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #bedbb0; /* Light green icon color for button */
  fill: none;
`;
