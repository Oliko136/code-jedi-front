import styled from 'styled-components';

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
   p {
    text-align: center;
    //color: rgba(250, 250, 250, 0.5);
    font-weight: 400;
    font-size: 14px;
    max-width: 486px;
    align-self: center;
   }
`;

export const TextOnHomePage = styled.p`
  color: #356745;
  font-weight: 400;
  font-size: 10px;
  padding: 0 20px;
  max-width: 335px;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
    //max-width: 486px;
  }
`;