import { createAsyncThunk } from '@reduxjs/toolkit';
import * as boardAPI from '../../api/board-api';

export const getAllBoards = createAsyncThunk(
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

export const createBoard = createAsyncThunk(
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

export const getOneBoard = createAsyncThunk(
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

export const updateBoard = createAsyncThunk(
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

export const deleteBoard = createAsyncThunk(
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

//
