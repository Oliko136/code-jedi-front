import { createSlice } from "@reduxjs/toolkit";
import { getAllBoards, createBoard, getOneBoard, updateBoard, deleteBoard } from "./boards-operations.js";
import { pending, rejected } from "../../helpers/redux-functions.js";

const initialState = {
    boards: [],
    totalBoards: 0,
    currentBoard: {},
    isLoading: false,
    error: null
}

const boardSlice = createSlice({
    name: "boards",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllBoards.pending, pending)
            .addCase(getAllBoards.fulfilled, (state, { payload }) => {
                state.boards = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllBoards.rejected, rejected)
            .addCase(createBoard.pending, pending)
            .addCase(createBoard.fulfilled, (state, { payload }) => {
                state.boards.push(payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(createBoard.rejected, rejected)
            .addCase(getOneBoard.pending, pending)
            .addCase(getOneBoard.fulfilled, (state, { payload }) => {
                state.currentBoard = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getOneBoard.rejected, rejected)
            .addCase(updateBoard.pending, pending)
            .addCase(updateBoard.fulfilled, (state, { payload }) => {
                state.currentBoard = { ...state.currentBoard, ...payload };
                state.boards = state.boards.map(board => board._id === payload.id ? payload : board);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateBoard.rejected, rejected)
            .addCase(deleteBoard.pending, pending)
            .addCase(deleteBoard.fulfilled, state => {
                state.boards = state.boards.filter(({ _id }) => _id !== state.currentBoard._id);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteBoard.rejected, rejected)
    }
});

export const boardReducer = boardSlice.reducer;