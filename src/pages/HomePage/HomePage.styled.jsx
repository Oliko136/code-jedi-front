import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background-color: #1f1f1f;
  min-height: 90.8vh;
  justify-content: center;
  // margin-left: 0;

  @media screen (max-width: 768px) {
    margin-left: 259px;
  }

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
