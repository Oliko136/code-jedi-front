import { createSlice } from "@reduxjs/toolkit";
import { getAllBoardsThunk, createBoardThunk, getBoardByIdThunk, updateBoardThunk, deleteBoardThunk } from "./boards-operations.js";
import { pending, rejected } from "../../helpers/redux-functions.js";

const initialState = {
    boards: [],
    currentBoard: {},
    isLoading: false,
    error: null
}

const boardSlice = createSlice({
    name: "boards",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllBoardsThunk.pending, pending)
            .addCase(getAllBoardsThunk.fulfilled, (state = initialState, { payload }) => {
                state.boards = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllBoardsThunk.rejected, rejected)
            .addCase(createBoardThunk.pending, pending)
            .addCase(createBoardThunk.fulfilled, (state = initialState, { payload }) => {
                state.boards.push(payload);
                state.currentBoard = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(createBoardThunk.rejected, rejected)
            .addCase(getBoardByIdThunk.pending, pending)
            .addCase(getBoardByIdThunk.fulfilled, (state = initialState, { payload }) => {
                state.currentBoard = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getBoardByIdThunk.rejected, rejected)
            .addCase(updateBoardThunk.pending, pending)
            .addCase(updateBoardThunk.fulfilled, (state = initialState, { payload }) => {
                state.currentBoard = { ...state.currentBoard, ...payload };
                state.boards = state.boards.map(board => board._id === payload.id ? payload : board);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateBoardThunk.rejected, rejected)
            .addCase(deleteBoardThunk.pending, pending)
            .addCase(deleteBoardThunk.fulfilled, (state = initialState, _)=> {
                state.boards = state.boards.filter(({ _id }) => _id !== state.currentBoard._id);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteBoardThunk.rejected, rejected)
    }
});

export const boardReducer = boardSlice.reducer;
