import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
    isLoading: false,
    error: null
}

const cardSlice = createSlice({
    name: "cards",
    initialState
});

export const cardReducer = cardSlice.reducer;