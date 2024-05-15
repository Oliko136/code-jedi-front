import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth-api.js';


export const needhelpThunk = createAsyncThunk(
  'support/sendEmail',
  async ({ email, comment},{ rejectWithValue }) => {
    try {
      const data = await authAPI.needhelp({
        email,
        comment,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
