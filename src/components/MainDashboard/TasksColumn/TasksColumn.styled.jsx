import styled from 'styled-components';

export const DivForColumns = styled.ul`
  display: flex;
  gap: 28px;
`;

export const Column = styled.li`
  display: block;
`;

export const TitleColumnDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(--btn-add-column);
  border-radius: 8px;
  align-items: center;
  width: 334px;
  height: 56px;
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--additional-text-color);
    width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SvgDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button``;

export const Icons = styled.svg`
  stroke: var(--show-filter-txt);
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
  background-color: var(--additional-icon-color);
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
  background-color: var(--btn-column);
  border-radius: 8px;
  width: 28px;
  height: 28px;
  stroke: white;
  padding: 5px 7px 8px 6px;
`;

export const Plus = styled.use`
  stroke: var(--btn-plus-card);
`;

export const TextBtn = styled.use`
  color: var(--btn-text-color);
`;