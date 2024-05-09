import { createSlice } from "@reduxjs/toolkit";
import { getAllBoards, createBoard, getOneBoard, updateBoard, deleteBoard } from "./boards-operations.js";
import { pending, rejected } from "../../helpers/redux-functions.js";
import { get } from "react-hook-form";

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
            .addCase(getAllBoards.fulfilled)
            .addCase(getAllBoards.rejected, rejected)
            .addCase(createBoard.pending, pending)
            .addCase(createBoard.fulfilled)
            .addCase(createBoard.rejected, rejected)
            .addCase(getOneBoard.pending, pending)
            .addCase(getOneBoard.fulfilled)
            .addCase(getOneBoard.rejected, rejected)
            .addCase(updateBoard.pending, pending)
            .addCase(updateBoard.fulfilled)
            .addCase(updateBoard.rejected, rejected)
            .addCase(deleteBoard.pending, pending)
            .addCase(deleteBoard.fulfilled)
            .addCase(deleteBoard.rejected, rejected)
    }
});

export const boardReducer = boardSlice.reducer;