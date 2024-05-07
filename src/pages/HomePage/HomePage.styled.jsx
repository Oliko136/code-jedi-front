import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  background-color: #1f1f1f;
  height: 100vh;
  justify-content: center;

  p {
    text-align: center;
    color: rgba(250, 250, 250, 0.5);
    font-weight: 400;
    font-size: 14px;
    max-width: 486px;
    align-self: center;
  }

  @media screen (max-width: 375px) {
    p {
      font-size: 12px;
      max-width: 335px;
    }
  }
`;

export const CreateBoard = styled(NavLink)`
  color: #bedbb0;
  transition: text-decoration 450ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
