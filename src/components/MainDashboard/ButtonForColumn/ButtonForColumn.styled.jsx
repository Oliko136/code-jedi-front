import styled from 'styled-components';

export const ButtonSend = styled.button`
  border-radius: 8px;
  min-width: 335px;
  height: 56px;
  background-color: var(--btn-add-column);
  color: var(--icon-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    min-width: 335px;
    width: 100%;
  }
`;

export const IconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--btn-add-column-wrap);
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
`;

export const PlusButton = styled.div`
  // width: 64px;
  // height: 28px;
  font-weight:500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Text = styled.div`
font-weight:500;
font-size:14px;
`;

// export const AddColumnButton = styled.button`
//   display: flex;
//   height: 56px;
//   padding: 12px 79px;
//   background-color: black;
//   color: #fff;
//   border-radius: 8px;
//   align-items: center;
//   gap: 8px;
//   transition: 350ms ease-in-out;
//   &:hover {
//     background-color: #121212;
//   }
// `;

// export const IconPlus = styled.svg`
//   background-color: #fff;
//   border-radius: 8px;
//   width: 28px;
//   height: 28px;
//   stroke: black;
//   padding: 5px 7px 8px 6px;
// `;
