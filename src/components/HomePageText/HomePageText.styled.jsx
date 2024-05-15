import styled from 'styled-components';

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
  
   p {
    text-align: center;
    font-weight: 400;
    max-width: 486px;
    align-self: center;
   }
`;

export const TextOnHomePage = styled.p`
  color: var(--cart-text);
  font-weight: 400;
  font-size: 12px;
  padding: 0 20px;
  max-width: 335px;
  line-height: 133%;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 129%;
  }
`;

export const CreateBoard = styled.button`
  color: var(  --accent-icon-hover-color);

  &:hover {
    text-decoration: underline;
  }
`;
