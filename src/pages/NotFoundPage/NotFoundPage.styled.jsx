import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundBG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  background-color: #1f1f1f;
  height: 100vh;
`;

export const Or = styled.p`
  color: white;
  margin: 8px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;

  @media screen (max-width: 375px) {
    gap: 10px;
  }
`;

export const FourFirst = styled.div`
  background-color: #00cc00;
  padding: 13px;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0 3px 10px 4px rgba(255, 255, 255, 0.5);
  transition: padding 150ms ease-in-out;

  &:hover {
    padding: 13px 20px;
  }

  p {
    font-size: 90px;
    color: white;
  }

  @media screen (max-width: 768px) {
    p {
      font-size: 45px;
    }
  }
`;

export const ZeroNum = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: 15px;
  box-shadow: 0 0 10px 4px rgba(0, 255, 0, 0.6);
  border: 2px solid #00de00;
  transition: padding 150ms ease-in-out;

  &:hover {
    padding: 13px 20px;
  }

  p {
    font-size: 90px;
    color: #1f1f1f;
  }

  @media screen (min-width: 768px) {
    p {
      font-size: 45px;
    }
  }
`;

export const FourSecond = styled.div`
  background-color: #1f1f1f;
  padding: 13px;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0 3px 10px 4px rgba(255, 255, 255, 0.5);
  transition: padding 150ms ease-in-out;

  &:hover {
    padding: 13px 20px;
  }

  p {
    font-size: 90px;
    color: #00de00;
  }

  @media screen (min-width: 768px) {
    p {
      font-size: 45px;
    }
  }
`;

export const NotFoundText = styled.p`
  color: white;
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;

  @media screen (min-width: 768px) {
    font-size: 10px;
  }
`;

export const GoHomeButton = styled(NavLink)`
  color: #00de00;
  text-align: center;
  width: 290px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5);
  }

  @media screen (min-width: 768px) {
    font-size: 15px;
  }
`;

export const GoLoginButton = styled(NavLink)`
  color: #00de00;
  text-align: center;
  width: 290px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5);
  }

  @media screen (min-width: 768px) {
    font-size: 15px;
  }
`;
