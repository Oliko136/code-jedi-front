import { createAsyncThunk } from '@reduxjs/toolkit';
import * as columnApi from '../../api/column-api';
import { toast } from 'react-toastify';

const TOASTER = {
  style: {
    border: '2px solid #bedbb0',
    backgroundColor: '#1f1f1f',
    color: '#fff',
    textAlign: 'center',
  },
  position: 'top-center',
  duration: 2000,
};

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
      toast('You have successfully created a column ✅', TOASTER);
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
      toast('You have successfully edited the column ✅', TOASTER);
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
      toast('You have successfully deleted the column ✅', TOASTER);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
