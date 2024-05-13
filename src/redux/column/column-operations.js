import { createAsyncThunk } from '@reduxjs/toolkit';
import * as columnApi from '../../api/column-api';

export const getAllColumnsThunk = createAsyncThunk(
  'columns/getAllColumns',
  async (boardId, thunkAPI) => {
    try {
      const data = await columnApi.getAllColumns(boardId);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumnThunk = createAsyncThunk(
  'columns/createColumn',
  async ({ boardId, body }, thunkAPI) => {
    try {
      const data = await columnApi.addColumn(boardId, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getColumnByIdThunk = createAsyncThunk(
  'columns/getOneColumn',
  async ({ boardId, id }, thunkAPI) => {
    try {
      const data = await columnApi.getColumnById(boardId, id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumnThunk = createAsyncThunk(
  'columns/updateColumn',
  async ({ boardId, id, body }, thunkAPI) => {
    try {
      const data = await columnApi.updateColumn(boardId, id, body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumnThunk = createAsyncThunk(
  'columns/deleteColumn',
  async ({ boardId, id }, thunkAPI) => {
    try {
      const data = await columnApi.deleteColumn(boardId, id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
