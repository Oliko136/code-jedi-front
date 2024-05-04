import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  background: var(--welcomeBgColor);
height: 100vh;
  img {
    margin-bottom: 14px;
  }

  @media screen (min-width: 768px) {
    margin-bottom: 24px;
  }

    p {
      margin-bottom: 48px;
      text-align: center;
      max-width: 473px;
      `;

export const WelcomeLogo = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.04em;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  span {
    background-color: black;
    padding: 10px 13px 7px 13px;
    border-radius: 10px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const AuthARegister = styled(Link)`
  font-weight: 500;
  text-align: center;
  width: 280px;
  border-radius: 8px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: black;
  color: white;
  transition: 350ms ease-in-out;

  @media screen and (min-width: 375px) {
    min-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 340px;
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: white;
      color: black;
    }
  }
`;

export const AuthLogin = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  transition: color 450ms ease-in-out;

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      text-decoration: underline;
      color: white;
    }
  }
`;
