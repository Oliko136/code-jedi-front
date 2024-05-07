import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth-api.js';
// import axios from 'axios';
// import { BASE_API_URL } from 'constants/base-url.js';

// const axiosInstance = axios.create({ BASE_API_URL });

// export const needhelp = createAsyncThunk(
//   'email/needhelp',
//   async ({ email, text }, thunkAPI) => {
//     try {
//       const data = await axiosInstance.post('email/needhelp', {
//         email,
//         comment: text,
//       });
//       return data;
//     } catch ({ message }) {
//       thunkAPI.rejectWithValue(message);
//     }
//   }
// );
export const needhelp = createAsyncThunk(
  'email/needhelp',
  async ({ email, text }, thunkAPI) => {
    try {
      const data = await authAPI.needhelp('email/needhelp', {
        email,
        comment: text,
      });
      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
