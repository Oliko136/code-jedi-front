import styled from 'styled-components';

export const Opacity = styled.div`
  // position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Add opacity for background */
  z-index: 9999; /* Ensure it's above other content */
`;

export const Modalcont = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  min-height: 130px;
  border-radius: 8px;
  padding: 24px;
  color: var(--primary-text-color);
  background: var(--input-bg-color);
  z-index: 10000; /* Ensure it's above the opacity layer */
  width: ${({ $Width }) => $Width}px;
`;

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
