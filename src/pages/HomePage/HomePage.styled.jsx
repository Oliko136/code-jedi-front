import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
`;

export const MainContainer = styled.div`
  color: var(--primary-text-color);
  background-color: var(--primary-bg-color);
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen (max-width: 768px) {
    margin-left: 259px;
  }

  @media screen (max-width: 375px) {
    p {
      font-size: 12px;
      max-width: 335px;
    }
  }
`;
