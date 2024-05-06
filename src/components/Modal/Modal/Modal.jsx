import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import xCloseImg from './x-close.svg';
import css from './Modal.module.css';
// import sprite from '../../../assets/svg/sprite.svg';

const Modal = ({ children, widthMod, heightMod, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <div className={css.opacity} onClick={onClose}>
      <div
        className={css.modal}
        style={{ width: widthMod, height: heightMod }}
        onClick={event => event.stopPropagation()}
      >
        <div className={css.close} onClick={onClose}>
          {/* <svg width={18} height={18} fill="currentColor">
            <use href={`${sprite}#close`}></use>
          </svg> */}
          <img src={xCloseImg} alt="Close" width={18} height={18} />
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
