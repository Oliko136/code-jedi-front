import styled from 'styled-components';

export const ScreensContainer = styled.div`
  // text-align: center;
  width: 100vw;
  justify-content: center;
`;

export const TextOnHomePage = styled.p`
  text-align: center;
  color: rgba(250, 250, 250, 0.5);
  font-weight: 400;
  font-size: 14px;
  max-width: 486px;
  align-self: center;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
    max-width: 486px;
  }
`;

export const CreateBoard = styled.button`
  color: #bedbb0;
  transition: text-decoration 450ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
