import { createSlice } from "@reduxjs/toolkit";
import { getAllCardsThunk, addCardThunk, getCardByIdThunk, updateCardThunk, moveCardThunk, deleteCardThunk } from "../cards/cards-operations.js";
import { pending, rejected } from "helpers/redux-functions";

const initialState = {
    cards: [],
    totalCards: 0,
    currentCard: {},
    isLoading: false,
    error: null
}

const cardSlice = createSlice({
    name: "cards",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllCardsThunk.pending, pending)
            .addCase(getAllCardsThunk)
            .addCase(getAllCardsThunk.rejected, rejected)
            .addCase(addCardThunk, pending)
            .addCase(addCardThunk)
            .addCase(addCardThunk.rejected, rejected)
            .addCase(getCardByIdThunk.pending, pending)
            .addCase(getCardByIdThunk)
            .addCase(getCardByIdThunk.rejected, rejected)
            .addCase(updateCardThunk.pending, pending)
            .addCase(updateCardThunk)
            .addCase(updateCardThunk.rejected, rejected)
            .addCase(moveCardThunk.pending, pending)
            .addCase(moveCardThunk)
            .addCase(moveCardThunk.rejected, rejected)
            .addCase(deleteCardThunk.pending, pending)
            .addCase(deleteCardThunk)
            .addCase(deleteCardThunk.rejected, rejected)
    }
});

export const cardReducer = cardSlice.reducer;