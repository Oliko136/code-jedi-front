import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from 'constants/base-url';

axios.defaults.baseURL = BASE_API_URL;

export const updateTheme = createAsyncThunk(
  '',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/users', { theme });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
