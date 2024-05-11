import { createSlice } from '@reduxjs/toolkit';

import {
  createBoardThunk,
  deleteBoardThunk,
  updateBoardThunk,
  getOneBoardById,
  getAllBoardThunk,
} from './service-thunk';

const initialState = {
  boards: [],
  selectedBoard: {},
  error: null,
  isLoading: false,
  openModal: false,
  modalContent: {
    endPoint: null,
    action: null,
    recordDataEdit: null,
    recordDataAdd: null,
    editedData: null,
  },
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = { ...state.modalContent, ...action.payload };
    },
    
  },
  extraReducers: builder => {
    builder
     
      .addCase(getAllBoardThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createBoardThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getOneBoardById.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateBoardThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteBoardThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
   
      .addCase(getAllBoardThunk.fulfilled, (state, action) => {
        state.error = null;
        state.boards = [...action.payload];
        state.isLoading = false;
      })
      .addCase(createBoardThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.boards.push(action.payload);
      })
      .addCase(getOneBoardById.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        if (action.payload.columns[0].hasOwnProperty('_id')) {
          state.selectedBoard = action.payload;

          return;
        }
        state.selectedBoard = action.payload;
        state.selectedBoard.columns = [];
      })

      .addCase(updateBoardThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.boards = action.payload.boards;
      })
      .addCase(deleteBoardThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.boards.push(action.payload);
      })

      
      .addCase(getAllBoardThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createBoardThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOneBoardById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateBoardThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBoardThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
   
  },
});

export const { setModalStatus, setModalContent, addColumnSuccess } =
  serviceSlice.actions;
const serviceReducer = serviceSlice.reducer;
export default serviceReducer;
