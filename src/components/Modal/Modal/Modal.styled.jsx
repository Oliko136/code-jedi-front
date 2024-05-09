import styled from 'styled-components';

export const Opacity = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-bg-color);

  @media screen and (max-width: 375px) {
    padding: 15px;
  }
`;

export const Modalcont = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;

  min-height: 130px;
  border-radius: 8px;
  padding: 24px;
  color: var(--primary-text-color);
  background: var(--input-bg-color);
  // height: ${({ $Height }) => $Height}px; /* Use $Height prop */
  width: ${({ $Width }) => $Width}px; /* Use $Width prop */
  // height: ${({ $developers }) => ($developers ? '370px' : 'unset')};
  // width: ${({ $developers }) => ($developers ? '90%' : '300px')};

  @media screen and (min-width: 375px) {
    // width: ${({ $developers }) => ($developers ? '60%' : '335px')};
  }

  @media screen and (min-width: 768px) {
    overflow-y: visible;
  }
`;
// height: ${({ $Height }) => $Height}; /* Use $Height prop */
// width: ${({ $Width }) => $Width}; /* Use $Width prop */

// @media screen and (min-width: 375px) {
//   width: 335px;
// }

// @media screen and (min-width: 768px) {
//   overflow-y: visible;
// }

//   height: ${({ $developers }) => ($developers ? '370px' : 'unset')};
//   width: ${({ $developers }) => ($developers ? '90%' : '300px')};

//   @media screen and (min-width: 375px) {
//     width: ${({ $developers }) => ($developers ? '60%' : '335px')};
//   }

//   @media screen and (min-width: 768px) {
//     min-height: ${({ $developers }) => ($developers ? '650px' : 'unset')};
//     width: ${({ $developers }) => ($developers ? '730px' : '350px')};
//     width: ${props =>
//       props.$containerWidth ? `${props.$containerWidth}px` : '350px'};
//     overflow-y: visible;
//   }
// `;

// .modal {
//   position: fixed;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;
//   padding: 24px;

//   background-color: #161616;
//   z-index: 900;
// }

export const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: 1440px) {
    &:hover svg,
    &:focus svg {
      filter: drop-shadow(1px 1px 3px var(--additional-icon-color));
    }
  }
`;

// .ModalClose {
//   position: absolute;
//   top: 14px;
//   right: 14px;
//   background-color: white;
//   padding: 0;
//   color: #161616;
// }
