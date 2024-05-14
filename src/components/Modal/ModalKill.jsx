
import React from 'react';
const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
