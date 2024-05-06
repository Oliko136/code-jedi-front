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
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  transform: translateX(-25%);
  display: flex;
  width: 100px;
  height: 107px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--input-border-color);
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
  background: var(--input-bg-color);
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
    color: var(--additional-input-text-color);
    cursor: pointer;
    margin-bottom: 4px;
  }

  ul li:hover {
    color: var(--additional-icon-color);
  }
`;

export const ThemeText = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--additional-text-color-op);
`;

export const ThemeIcon = styled.svg`
  width: 16px;
  height: 16px;
  padding-top: 2px;
  stroke: var(--additional-text-color-op);
  margin-left: 1px;
  use {
  }
`;
