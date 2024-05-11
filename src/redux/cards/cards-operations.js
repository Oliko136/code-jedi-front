import { createAsyncThunk } from '@reduxjs/toolkit';
import * as cardAPI from "../../api/card-api";

export const getAllCards = createAsyncThunk(
  'cards/getAllCards',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const { data } = await cardAPI.getAllCards(boardId, columnId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'cards/addCard',
  async ({ boardId, columnId, body }, { rejectWithValue }) => {
    try {
      const { data } = await cardAPI.addCard(boardId, columnId, body);
      return data.card;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ boardId, columnId, cardId  }, { rejectWithValue }) => {
      try {
          const { data } = await cardAPI.deleteCard(boardId, columnId, cardId);
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
    }
  }
);