import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: var(--welcomeBgColor);
`;

export const FormWrap = styled.div`
  padding: 24px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--bgColorAuth);
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 363px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 395px;
    padding: 40px;
  }
`;

export const AuthList = styled.ul`
  display: flex;
  gap: 14px;
  margin-bottom: 26px;
`;

export const AuthLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
  }
`;

export const FormUi = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    position: relative;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: transparent;
  border: 1px solid var(--inputBorderFocus);
  border-radius: 8px;
  color: #ffffff;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
 background: var(--inputBgColor);
 font-weight: 400;
 font-size: 14px;
letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
  
`;

export const PassInputWrap = styled.div`
  position: relative;
`;

export const HideBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  opacity: 0.4;
  background-color: transparent;
  cursor: pointer;
  
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  font-weight: 500;
  background: var(--inputBorderFocus);
  border-radius: 8px;
  color: var(--buttonColor);
  transition: background 0.3s ease;

  margin-top: 10px;

  &:hover {
    background: #9dc888;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ErrorPara = styled.span`
  position: absolute;
  left: 0;
  bottom: -14px;
  font-size: 10px;
  color: #03ecfc;
`;