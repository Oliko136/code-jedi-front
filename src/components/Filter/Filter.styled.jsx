import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 300px;
  padding: 24px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  //   background: var(--bg-theme);
  background: #151515;
  border-radius: 8px;
  position: relative;
  color: var(--color);
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #121212;
  margin-bottom: 14px;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color:#fff;
  margin: 0;
  margin-bottom: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const LabelTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #121212;
  color: var(--additional-text-color);
`;

export const ShowAllButton = styled.button`
  font-family: inherit;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #125621;
  border: none;
  outline: none;
  background-color: transparent;
  transition: color 250ms linear;

  &:hover {
    color:#555000;
  }
`;
