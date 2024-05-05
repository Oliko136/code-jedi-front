//заглушка
import React from 'react';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Поки що тут немає контенту, просто рендеримо дітей */}
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
