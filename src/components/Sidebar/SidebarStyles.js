import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  background: #151515;
  transform: translateX(0px);
  transition: all var(--transition);
  z-index: 200;

  &.showSidebar {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(0);
    position: unset;
  }
`;

export const SidebarHeader = styled.div`
  padding: 14px 14px 0;

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
    background-color: #1f1f1f;
    padding: 8px 10px;
  }

  svg {
    display: block;
    width: 12px;
    height: 16px;
    fill: var(--logo-icon-color);
    stroke: none;
  }
`;

export const CreateBoardBlock = styled.div`
  display: flex;
  width: 197px;
  height: 70px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(22, 22, 22, 0.1);
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 70px;
  }
`;

export const CreateBoardText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
  width: 76px;
  height: 42px;
  display: flex;
`;

export const Button = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  padding: 8px 10px;
  background-color: #7b7b7b;
  transition: background-color var250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #999;
  }
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #fff;

  &:hover,
  &:focus {
    stroke: #ccc;
  }
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
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    opacity: 0.08;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const LogoutBlock = styled.div`
  padding: 0 0 24px 24px;
  display: flex;
  align-items: center;
`;

export const LogoutLink = styled(Link)`
  display: flex;
  width: 105px;
  height: 32px;
  gap: 14px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:hover .logoutIcon {
    stroke: #999;
  }

  &:focus,
  &:focus .logoutIcon {
    stroke: #999;
  }
`;

export const LogoutIcon = styled.svg`
  display: block;
  width: 32px;
  height: 32px;
  stroke: #7b7b7b;
  fill: none;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
