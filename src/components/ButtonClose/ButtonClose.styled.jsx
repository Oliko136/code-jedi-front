import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

export const CloseButtonWrapper = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const CloseIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  stroke: var(--icon-color);
  // transition: stroke 250ms linear;

  &:hover > svg {
    stroke: #559840;
  }
`;
