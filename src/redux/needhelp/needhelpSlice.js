import { createSlice } from '@reduxjs/toolkit';
import { needhelpThunk } from './needhelp-operation.js';
import { pending, rejected } from '../../helpers/redux-functions.js';


const initialState = {
    email: '',
    isLoading: false,
    error: null,
};


  const needhelpSlice = createSlice({
    name: 'support',
    initialState,
    extraReducers: builder => {
    builder
      .addCase(needhelpThunk.pending, pending)
      .addCase(needhelpThunk.fulfilled, 
        (state = initialState, { payload }) => {
        state.email = payload;  
        state.isLoading = false;
        state.error = null;
      })
      .addCase(needhelpThunk.rejected, rejected);
  },
});

export const needhelpReducer = needhelpSlice.reducer;
