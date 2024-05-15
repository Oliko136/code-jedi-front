import styled from 'styled-components';

export const Popup = styled.div`
  position: absolute;
 right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 18px;
  width: 135px;
  bottom: 20px;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 4px 16px 0 rgba(17, 17, 17, 0.1);
 background: var(--additional-bg-color);
`;

export const BtnPop = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    row-gap: 10px;
    font-size: 11px;
    background-color: transparent;
    padding: 0;
    width: 100%;
    overflow: hidden;
    color: var(--cart-text);
    font-size: 14px;
    letter-spacing: -0.02em;
   

    &:hover,
   &:focus {
    border: blue;
    opacity: 1;
    visibility: visible;
    height: auto;
    color: var(--accent-color);
  }
`;




