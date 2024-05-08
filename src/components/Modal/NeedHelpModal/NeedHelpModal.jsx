import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BASE_API_URL } from '../../../constants/base-url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import css from './NeedHelpModal.module.css';

const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const axiosInstance = axios.create({ BASE_API_URL });
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

  const needhelp = createAsyncThunk(
    'email/needhelp',
    async ({ email, text }, thunkAPI) => {
      try {
        const data = await axiosInstance.post('email/needhelp', {
          email,
          comment: text,
        });
        return data;
      } catch ({ message }) {
        thunkAPI.rejectWithValue(message);
      }
    }
  );

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
        <form className={css.modalform} onSubmit={handleSubmit}>
          <div className={css.modalTitle}>{'Need help'}</div>
          <div className={css.emailinput}>
            <input
              value={email}
              onChange={handleEmailChange}
              required
              type="email"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div className={css.commenttextarea}>
            <textarea
              type="text"
              name="comment"
              value={text}
              onChange={handleTextChange}
              placeholder="Comment"
              rows="4"
            />
          </div>
          <button className={css.buttonSend} type="submit">
            Send
          </button>
        </form>
      </Modal>
    </>
  );
};

export default NeedHelpModal;
