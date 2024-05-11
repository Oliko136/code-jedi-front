import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addBoard,
  deleteBoard,
  updateBoard,
  getAllBoards,
  getBoardById,
  
} from '../../api/board-api.js';



export const getAllBoardThunk = createAsyncThunk(
  'service/getBoard',
  async (_, thunkAPI) => {
    try {
      const response = await getAllBoards();
      return response;
    } catch (error) {
      console.log(error);
      toast.error('Error get ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoardThunk = createAsyncThunk(
  'service/addBoard',
  async (body, thunkAPI) => {
    try {
      const response = await addBoard(body);
      return response;
    } catch (error) {
      console.log(error);
      toast.error('Error add', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getOneBoardById = createAsyncThunk(
  'service/getBoardById',
  async (id, thunkAPI) => {
    try {
      const data = await getBoardById(id);
      console.log(id);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoardThunk = createAsyncThunk(
  'service/updateBoard',
  async (body, thunkAPI) => {
    try {
      const response = await updateBoard(body);

      return response;
    } catch (error) {
      console.log(error);
      toast.error('Error edit ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoardThunk = createAsyncThunk(
  'service/deleteBoard',
  async (id, thunkAPI) => {
    try {
      const response = await deleteBoard(id);
      return response;
    } catch (error) {
      console.log(error);
      toast.error('Error delete', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


