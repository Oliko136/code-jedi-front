import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth-api.js';
import { toast } from 'react-toastify';

export const needhelpThunk = createAsyncThunk(
  'support/sendEmail',
  async ( body ,{ rejectWithValue }) => {

    try {
      const data = await authAPI.needhelp( body ); 
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return rejectWithValue(error.response.data.message);
     
    }
  }
);

