import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_API_URL } from '../../../constants/base-url';
// import { xiosInstance } from '../../../api/axiosInstance.js';
// import { ENDPOINTS } from '../../../api/endpoints.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import css from './NeedHelpModal.module.css';

const NeedHelpModal = ({ showModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const baseURL = BASE_API_URL;
  const axiosInstance = axios.create({
    baseURL,
  });
  const ENDPOINTS = Object.freeze({
    auth: {
      register: 'auth/register',
      login: 'auth/login',
      logout: 'auth/logout',
      refreshToken: 'auth/refresh',
    },
    users: {
      current: 'users/current',
      theme: 'users/current/theme',
    },
    backgrounds: 'api/backgrounds',
    boards: {
      allBoards: 'api/boards',
      oneBoard: boardId => `api/boards/${boardId}`,
      boardFilter: boardId => `api/boards/${boardId}/filter`,
    },
    columns: {
      allColumns: 'api/columns',
      oneColumn: columnId => `api/columns/${columnId}`,
    },
    cards: {
      allCards: 'api/cards',
      cardsStats: 'api/cards/stats',
      oneCard: cardId => `api/cards/${cardId}`,
      cardStatus: cardId => `api/cards/${cardId}/status`,
      cardOrder: cardId => `api/cards/${cardId}/order`,
    },
    email: {
      support: 'email/support',
    },
  });

  const support = createAsyncThunk(
    'email/support',
    async ({ email, text }, thunkAPI) => {
      try {
        const data = await axiosInstance.post(ENDPOINTS.email.support, {
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
    const TOASTER_CONFIG = {
      style: {
        border: '1px solid #bedbb0',
        backgroundColor: '#1f1f1f',
        color: '#fff',
        textAlign: 'center',
      },
      position: 'ctop-center',
      duration: 1500,
    };
    if (email.trim() === '' || text.trim() === '') {
      toast('Please enter data to submit ❗️', TOASTER_CONFIG);
      return;
    }

    if (text.trim().length < 5) {
      toast('Comment must be at least 5 characters long ❗️', TOASTER_CONFIG);
      return;
    }

    try {
      dispatch(support({ email, text }));
      toast('Your message was sent successfully ✅', TOASTER_CONFIG);
      showModal(false);
    } catch (error) {
      toast('Failed to send email', TOASTER_CONFIG);
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
