import { createSlice } from '@reduxjs/toolkit';
import { needhelp } from './needhelp-operation.js';
import { pending, rejected } from '../../helpers/redux-functions.js';

const needhelpSlice = createSlice({
  name: 'needhelp',
  initialState: {
    email: '',
    text: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(needhelp.pending, pending)
      .addCase(needhelp.fulfilled, (state, { payload }) => {
        state.email = payload;
        state.text = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(needhelp.rejected, rejected);
  },
});

export const needhelpReducer = needhelpSlice.reducer;
