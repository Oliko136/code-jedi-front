import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
import { needhelpThunk } from '../../../redux/needhelp/needhelp-operation.js';
import { toast } from 'react-toastify';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';
const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const TOASTER = {
    style: {
      border: '2px solid #bedbb0',
      backgroundColor: '#1f1f1f',
      color: '#fff',
      textAlign: 'center',
    },
    position: 'top-center',
    duration: 2000,
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (email.trim() === '' || comment.trim() === '') {
      toast('Please enter data to submit ❗️', TOASTER);
      return;
    }

    if (comment.trim().length < 10) {
      toast('Comment must be at least 10 characters long ❗️', TOASTER);
      return;
    }

    try {
      dispatch(needhelpThunk({ email: email, comment: comment }));
      toast('Your message was sent successfully ✅', TOASTER);
      showModal(false);
    } catch (error) { 
      // toast('Failed to send email', TOASTER);
    }
  };

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleTextChange = evt => {
    setComment(evt.target.value);
  };

  return (
    <>
      <Modal width={400} height={307} onClose={() => showModal(false)}>
        <Modalform onSubmit={handleSubmit}>
          <ModalTitle>{'Need help'}</ModalTitle>
          <Emailinput
            value={email}
            onChange={handleEmailChange}
            required
            type="email"
            name="email"
            placeholder="Email address"
          />
          <Commenttextarea
            type="text"
            name="comment"
            value={comment}
            onChange={handleTextChange}
            placeholder="Comment"
          />
          <ButtonSend type="submit">Send</ButtonSend>
        </Modalform>
      </Modal>
    </>
  );
};

export default NeedHelpModal;
