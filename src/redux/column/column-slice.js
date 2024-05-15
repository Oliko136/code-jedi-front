import { createSlice } from '@reduxjs/toolkit';
import * as columnOperations from './column-operations';
import { pending, rejected } from '../../helpers/redux-functions.js';

const initialState = {
  columns: [],
  totalColumns: 0,
  currentColumn: {},
  isLoading: false,
  error: null,
};

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(columnOperations.getAllColumnsThunk.pending, pending)
      .addCase(
        columnOperations.getAllColumnsThunk.fulfilled,
        (state, { payload }) => {
          state.columns = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(columnOperations.getAllColumnsThunk.rejected, rejected)

      .addCase(columnOperations.addColumnThunk.pending, pending)
      .addCase(
        columnOperations.addColumnThunk.fulfilled,
        (state, { payload }) => {
          state.columns.push(payload);
          state.currentColumn = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(columnOperations.addColumnThunk.rejected, rejected)

      .addCase(columnOperations.getColumnByIdThunk.pending, pending)
      .addCase(
        columnOperations.getColumnByIdThunk.fulfilled,
        (state, { payload }) => {
          state.currentColumn = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(columnOperations.getColumnByIdThunk.rejected, rejected)

      .addCase(columnOperations.updateColumnThunk.pending, pending)
      .addCase(
        columnOperations.updateColumnThunk.fulfilled,
        (state, { payload }) => {
          state.currentColumn = { ...state.currentColumn, ...payload };
          state.columns = state.columns.map(column =>
            column._id === payload.id ? payload : column
          );
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(columnOperations.updateColumnThunk.rejected, rejected)

      .addCase(columnOperations.deleteColumnThunk.pending, pending)
      .addCase(columnOperations.deleteColumnThunk.fulfilled, state => {
        state.columns = state.columns.filter(
          ({ _id }) => _id !== state.currentColumn._id
        );

        state.isLoading = false;
        state.error = null;
      })
      .addCase(columnOperations.deleteColumnThunk.rejected, rejected);
  },
});

export const columnReducer = columnSlice.reducer;
