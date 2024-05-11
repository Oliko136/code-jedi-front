import React from 'react';
import { CloseButtonWrapper, CloseIcon } from './ButtonClose.styled';

const ButtonClose = ({ onClick }) => {
  return (
    <CloseButtonWrapper onClick={onClick}>
      <CloseIcon
        width={18}
        height={18}
        fillColor={'none'}
        strokeColor={`var(--icon-color)`}
        name={'close'}
      />
    </CloseButtonWrapper>
  );
};

export default ButtonClose;

