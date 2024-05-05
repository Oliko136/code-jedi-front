import styled from 'styled-components';

export const ThemeDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ThemeSubDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .themeIcon {
    width: 16px;
    height: 16px;
    padding-top: 2px;
    stroke: #151515;
    fill: transparent;
    margin-left: 1px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100px;
  height: 107px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 1);
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
  background: #151515;
  gap: 4px;
  z-index: 99;

  ul {
    list-style: none;
    padding: 0;
    margin-left: 18px;
  }

  ul li {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #ffffff80;
    cursor: pointer;
    margin-bottom: 4px;
  }

  ul li:hover {
    color: #bedbb0;
  }
`;

export const ThemeText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffffcc;
`;

export const ThemeIcon = styled.svg`
  width: 16px;
  height: 16px;
  padding-top: 2px;
  stroke: rgba(255, 255, 255, 0.8);
  fill: transparent;
  margin-left: 1px;
`;
