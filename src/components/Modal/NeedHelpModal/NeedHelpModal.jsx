import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../Modal/Modal/Modal';
import { needhelp } from '../../../redux/needhelp/needhelp-operation.js';
import { toast } from 'react-toastify';
import {
  Modalform,
  ModalTitle,
  Emailinput,
  Commenttextarea,
  ButtonSend,
} from './NeedHelpModal.styled';
// import css from './NeedHelpModal.module.css';

const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
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

    if (email.trim() === '' || text.trim() === '') {
      toast('Please enter data to submit ❗️', TOASTER);
      return;
    }

    if (text.trim().length < 10) {
      toast('Comment must be at least 10 characters long ❗️', TOASTER);
      return;
    }

    try {
      dispatch(needhelp({ email, text }));
      toast('Your message was sent successfully ✅', TOASTER);
      showModal(false);
    } catch (error) {
      toast('Failed to send email', TOASTER);
    }
  };

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleTextChange = evt => {
    setText(evt.target.value);
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
            value={text}
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
