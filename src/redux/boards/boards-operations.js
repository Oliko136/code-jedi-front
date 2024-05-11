import { createAsyncThunk } from '@reduxjs/toolkit';
import * as boardAPI from '../../api/board-api';

export const getAllBoardsThunk = createAsyncThunk(
  'boards/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await boardAPI.getAllBoards();
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createBoardThunk = createAsyncThunk(
  'boards/createBoard',
  async (newBoard, { rejectWithValue }) => {
    try {
      const { data } = await boardAPI.addBoard(newBoard);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBoardByIdThunk = createAsyncThunk(
  'boards/getOneBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const { data } = await boardAPI.getBoardById(boardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBoardThunk = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, newData }, { rejectWithValue }) => {
    try {
      const { data } = await boardAPI.updateBoard(boardId, newData);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoardThunk = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const { data } = await boardAPI.deleteBoard(boardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
