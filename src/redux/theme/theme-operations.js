import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserTheme } from 'api/user-api';

export const updateTheme = createAsyncThunk(
  'theme/updateTheme',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const data = await updateUserTheme('/users', { theme });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
