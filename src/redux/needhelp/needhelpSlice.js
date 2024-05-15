import { createSlice } from '@reduxjs/toolkit';
import { needhelpThunk } from './needhelp-operation.js';
import { pending, rejected } from '../../helpers/redux-functions.js';

const needhelpSlice = createSlice({
  name: 'support',
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(needhelpThunk.pending, pending)
      .addCase(needhelpThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(needhelpThunk.rejected, rejected);
  },
});

export const needhelpReducer = needhelpSlice.reducer;
