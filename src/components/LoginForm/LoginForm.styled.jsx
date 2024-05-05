import styled from 'styled-components';

export const FormWrapLog = styled.div`
  padding: 24px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--bgColorAuth);
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
    padding: 40px;
  }
`;