import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../../Icon/Icon';
import { Opacity, Modalcont, ModalClose } from './Modal.styled';

const Modal = ({ children, width, height, onClose, developers = false }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <Opacity onClick={onClose}>
      <Modalcont
        $developers={developers}
        $Width={width}
        $Height={height}
        onClick={event => event.stopPropagation()}
      >
        <ModalClose type="button" aria-label="Close modal" onClick={onClose}>
          <Icon
            width={18}
            height={18}
            strokeColor={'var(--icon-color)'}
            name={'close'}
          />
        </ModalClose>
        {children}
      </Modalcont>
    </Opacity>,
    modalRoot
  );
};

export default Modal;
