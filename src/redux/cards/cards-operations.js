import { createAsyncThunk } from '@reduxjs/toolkit';
import * as cardAPI from "../../api/card-api";

export const getAllCardsThunk = createAsyncThunk(
  'cards/getAllCards',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const data = await cardAPI.getAllCards(boardId, columnId);
      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCardThunk = createAsyncThunk(
  'cards/addCard',
  async ({ boardId, columnId, body }, { rejectWithValue }) => {
    try {
      const data = await cardAPI.addCard(boardId, columnId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCardByIdThunk = createAsyncThunk(
    'cards/getOneCard',
    async ({boardId, columnId, cardId}, { rejectWithValue }) => {
      try {
        const data = await cardAPI.getCardById(boardId, columnId, cardId);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  )

export const updateCardThunk = createAsyncThunk(
  'cards/updateCard',
  async ({ boardId, columnId, cardId, body }, { rejectWithValue }) => {
    try {
      const data = await cardAPI.updateCard(boardId, columnId, cardId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const moveCardThunk = createAsyncThunk(
  'cards/moveCard',
  async ({ boardId, columnId, cardId, newColumn }, { rejectWithValue }) => {
    try {
      const data = await cardAPI.updateCardColumn(boardId, columnId, cardId, newColumn);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  'cards/deleteCard',
  async ({ boardId, columnId, cardId  }, { rejectWithValue }) => {
      try {
          const data = await cardAPI.deleteCard(boardId, columnId, cardId);
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
    }
  }
);