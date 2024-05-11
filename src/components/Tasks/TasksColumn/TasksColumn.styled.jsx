import styled from 'styled-components';
export const DivForColumns = styled.div`
  display: flex;
  gap: 28px;
`;

export const Column = styled.div`
  display: block;
`;

export const TitleColumnDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: black;
  border-radius: 8px;
  align-items: center;
  width: 334px;
  height: 56px;
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: white;
    width: 260px;
  }
`;

export const SvgDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button``;

export const Icons = styled.svg`
  stroke: rgba(255, 255, 255, 0.5);
  width: 16px;
  height: 16px;
  opacity: 50%;
  transition: 350ms ease-in-out;

  &:hover {
    opacity: 100%;
  }
`;

export const ButtonForCard = styled.button`
  display: flex;
  width: 100%;
  padding: 14px 79px;
  background-color: var(--highPriorityColor);
  color: black;
  border-radius: 8px;
  align-items: center;
  gap: 8px;
  transition: 350ms ease-in-out;

  &:hover {
    background-color: #b0eebe;
  }
`;

export const IconDoCard = styled.svg`
  background-color: black;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  stroke: white;
  padding: 5px 7px 8px 6px;
`;
