import { createSlice } from "@reduxjs/toolkit";
//import { getAllBoards, getOneBoard, deleteBoard } from "./boards-operations.js";
//import { pending, rejected } from "../../helpers/redux-functions.js";

const initialState = {
    boards: [],
    currentBoard: {},
    isLoading: false,
    error: null
}

const boardSlice = createSlice({
    name: "boards",
    initialState,
    extraReducers: builder => {}
});

export const boardReducer = boardSlice.reducer;