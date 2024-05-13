import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  min-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  color: white;
`;

export const CardsColor = styled.div`
  width: 4px;
  min-height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: var(--highPriorityColor); /* temporary color */
`;

export const CardDiv = styled.div`
  background-color: #121212;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  max-width: 334px;
  padding: 14px 24px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
  }
`;

export const CardsText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
`;

export const CardsParams = styled.div`
  display: flex;
`;

export const PriorityDiv = styled.div`
  margin-right: 16px;

  div {
    display: flex;
    gap: 4px;
  }
`;

export const PriorityTitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const ColorCard = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--highPriorityColor); /* temporary */
  border-radius: 50px;
`;

export const ColorCardText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
`;

export const DeadlineDiv = styled.div`
  margin-right: 116px;
  div {
    display: flex;
    gap: 4px;
  }
`;

export const DeadlineTitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const DeadlineDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 24px;
`;

export const ParamsButtons = styled.button``;

export const ButtonsIcon = styled.svg`
  stroke: #fff;
  opacity: 50%;
  width: 16px;
  height: 16px;
  transition: 350ms ease-in-out;

  &:hover {
    opacity: 100%;
  }
`;