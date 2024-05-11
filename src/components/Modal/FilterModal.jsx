import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  setModalContent,
  setModalStatus,
} from '../../redux/filter/service-slice.js';

const Modal = ({ open, onClose, children }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(open);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape' && open) {
        onClose();
      }
    },
    [open, onClose]
  );

  const handleCloseUserModal = useCallback(() => {
    dispatch(setModalContent({ action: null, recordDataEdit: null }));
    dispatch(setModalStatus(false));
    setShowModal(false);
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      setShowModal(true);
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      {showModal && (
        <div>
          {children}
          <button onClick={handleCloseUserModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
