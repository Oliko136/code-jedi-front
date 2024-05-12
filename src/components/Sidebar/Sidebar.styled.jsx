import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  // position: absolute;
  position: ${({ showSidebar }) => (showSidebar ? 'absolute' : 'static')};
  display: ${({ showSidebar }) => (showSidebar ? 'flex' : 'none')};

  // visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  // display: flex;
  flex-direction: column;
  width: 225px;
  max-width: 260px;
  height: 100vh;
  background: var(--accent-bg-color);
  transform: translateX(0px);
  transition: all var(--transition);

  z-index: ${({ showSidebar }) => (showSidebar ? 200 : 'auto')};
  // z-index: 200;

  &.showSidebar {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(0);
    position: static;
    z-index: auto;
    display: flex;
    width: 260px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 14px 14px 0;

    color: color: var(--icon-color);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    padding: 24px 24px 0;
  }
`;

export const LogoBlock = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 104px;
  height: 32px;
  margin-bottom: 70px;

  div {
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: var(--primary-bg-color);
  }
  p {
    color: var(--icon-color);
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.04em;
  }
  svg {
    display: block;
    fill: var(--primary-text-color);
    stroke: none;
  }
`;

export const BoardBlock = styled.div`
  padding: 0px 14px;

  h2 {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--additional-text-color-op);
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 24px;
  }
`;

export const CreateBoardBlock = styled.div`
  display: flex;
  width: 197px;
  height: 70px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--additional-text-color-op);
  border-bottom: 1px solid var(--additional-text-color-op);

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 70px;
  }
`;

export const CreateBoardText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
  width: 76px;
  height: 42px;
  display: flex;

  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;

  background-color: var(--accent-icon-color);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--accent-icon-hover-color);
    transform: scale(1.05);
  }
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--accent-bg-color);
`;

export const SidebarBoardsList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: var(--accent-icon-color);
    border-radius: 8px;
    opacity: 0.08;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-icon-hover-color);
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const LogoutBlock = styled.div`
  padding: 0 0 14px 14px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 24px;
  }
`;

export const LogoutLink = styled(Link)`
  display: flex;
  width: 105px;
  height: 32px;
  gap: 14px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-text-color);
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  

  &:hover, 
  &:focus .p {var(--accent-icon-hover-color);
  }
`;

export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: var(--accent-icon-color);
  fill: none;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--accent-icon-hover-color);
    transform: scale(1.05);
  }
`;
