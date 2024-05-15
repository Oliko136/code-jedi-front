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
    reducers: {
        resetCards: (state) => {
            state.cards = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllCardsThunk.pending, pending)
            .addCase(getAllCardsThunk.fulfilled, (state, { payload }) => {
                const uniqueById = [...state.cards, ...payload].filter((function() {
                    const seenIds = new Set();
                    return function(item) {
                        if (!seenIds.has(item._id)) {
                            seenIds.add(item._id);
                            return true;
                        }
                        return false;
                    };
                })())
                state.cards = uniqueById;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAllCardsThunk.rejected, rejected)
            .addCase(addCardThunk.pending, pending)
            .addCase(addCardThunk.fulfilled, (state, { payload }) => {
                state.cards.push(payload);
                state.currentCard = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addCardThunk.rejected, rejected)
            .addCase(getCardByIdThunk.pending, pending)
            .addCase(getCardByIdThunk.fulfilled, (state, { payload }) => {
                state.currentCard = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getCardByIdThunk.rejected, rejected)
            .addCase(updateCardThunk.pending, pending)
            .addCase(updateCardThunk.fulfilled, (state, { payload }) => {
                state.currentCard = { ...state.currentCard, ...payload };
                state.cards = state.cards.map(card => card._id === payload._id ? payload : card); 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateCardThunk.rejected, rejected)
            .addCase(moveCardThunk.pending, pending)
            .addCase(moveCardThunk.fulfilled, (state, { payload }) => {
                state.currentCard = { ...state.currentCard, ...payload };
                state.cards = state.cards.map(card => card._id === payload._id ? payload : card); 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(moveCardThunk.rejected, rejected)
            .addCase(deleteCardThunk.pending, pending)
            .addCase(deleteCardThunk.fulfilled, state => {
                state.cards = state.cards.filter(({ _id }) => _id !== state.currentCard._id);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteCardThunk.rejected, rejected)
    }
});

export const cardReducer = cardSlice.reducer;
export const {resetCards} = cardSlice.actions;