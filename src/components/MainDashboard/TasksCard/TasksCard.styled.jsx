import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  min-width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  background: var(--btn-add-column);

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 154px;
  }
`;

export const TextCard = styled.h4`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--icon-color);
  padding-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;  
`;

export const CardsColor = styled.div`
  width: 4px;
  min-height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const CardDiv = styled.div`
  // background-color: #121212;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  max-width: 334px;
  padding: 14px 24px;

  // h3 {
  //   font-size: 14px;
  //   font-weight: 600;
  //   margin-bottom: 14px;
  // }
`;

export const CardsText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--cart-text);
  margin-bottom: 14px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  width: calc(100% - 20px);
  display: -moz-box;
  -moz-box-orient: vertical;
  max-width: 100%;
  height: 38px;
  overflow-wrap: anywhere;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--cart-text);
  margin: 0;
  margin-bottom: 14px;
`;


export const CardsParams = styled.div`
  display: flex;
  justify-content: space-between;
  padding:14px 0;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
 justify-content: flex-start;
  width: 100%;
`;

export const PriorityDiv = styled.div`
margin-right: 14px;

  div {
    display: flex;
    gap: 4px;
  }
`;

export const PriorityTitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--cart-text);
  letter-spacing: -0.02em;
  margin-bottom:4px;
`;

export const ColorCard = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;

export const ColorCardText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--icon-color);
  letter-spacing: -0.02em;
`;

export const DeadlineDiv = styled.div`
 
  div {
    display: flex;
    gap: 4px;
  }
`;

export const DeadlineTitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: var(--cart-text);
  margin-bottom:4px;
`;

export const DeadlineDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--icon-color);
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ParamsButtons = styled.button``;

export const ButtonsIcon = styled.svg`
  stroke: var(--cart-text);
  opacity: 50%;
  width: 16px;
  height: 16px;
  transition: 350ms ease-in-out;

  &:hover {
    opacity: 100%;
  }
`;