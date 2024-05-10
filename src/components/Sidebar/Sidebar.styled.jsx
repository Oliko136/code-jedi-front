import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  // position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  background: #121212; /*var(--accent-bg-color);*/
  transform: translateX(0px);
  transition: all var(--transition);
  // z-index: 200;

  &.showSidebar {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(0);
  }
`;

export const SidebarHeader = styled.div`
  padding: 14px 14px 0;

    color: color: #fffff /*var(--icon-color);*/;
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
    background-color: #1f1f1f /*var(--primary-bg-color)*/;
    padding: 8px 10px;
  }
  p {
    color: #fff; /*var(--icon-color)*/
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.04em;
  }
  svg {
    display: block;
    width: 12px;
    height: 16px;
    fill: #fffffff;
    stroke: none;
  }
`;

export const BoardBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  h2 {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 8px;
  }
`;

export const CreateBoardBlock = styled.div`
  display: flex;
  width: 197px;
  height: 70px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    width: 212px;
    height: 70px;
  }
`;

export const CreateBoardText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff; /*var(--main-text-color);*/
  width: 76px;
  height: 42px;
  display: flex;

  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  padding: 8px 10px;
  background-color: #bedbb0;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #9dc888;
    transform: scale(1.05);
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
  &:hover .p {
    stroke: #999;
  }

  &:focus,
  &:focus .p {
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
