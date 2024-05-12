import styled from 'styled-components';

export const HelpBlock = styled.div`
  border-radius: 8px;
  width: 197px;
  height: 238px;
  background: var(--primary-bg-color);

  display: flex;
  flex-direction: column;
  padding: 14px;
  margin: 24px auto;
  @media screen and (min-width: 768px) {
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const PlantImage = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
  transform-origin: center bottom;
`;

export const HelpText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.42857;
  }

  span {
    color: var(--additional-icon-color);
  }
`;

export const HelpOpenModal = styled.button`
  display: flex;
  width: 94px;
  height: 20px;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
  background-color: transparent;
  border: none;
  transition: 0.3s ease;

  &:hover {
    color: var(--accent-icon-hover-color);
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    stroke: var(--primary-text-color);
    fill: none;
    transition: stroke 0.3s ease;
  }

  &:hover svg {
    stroke: var(--accent-icon-hover-color);
  }
`;

export const HelpOpenModalIcon = styled.span`
  /* Define your styles for the modal icon here */
`;

export const HelpModal = styled.div`
  /* Define your styles for the modal here */
`;

export const HelpModalContent = styled.div`
  /* Define your styles for the modal content here */
`;
