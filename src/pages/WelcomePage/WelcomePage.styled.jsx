import styled from 'styled-components';

export const WelcomeBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  background: var(--welcomeBgColor);

  img {
    margin-bottom: 14px;
  }

  @media screen (min-width: 768px) {
    margin-bottom: 24px;
  }
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
`;
