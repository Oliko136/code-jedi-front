import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "../../helpers/redux-functions.js";
import { registerThunk, logIn, logOut, getCurrentUser, updateUserInfo, updateUserTheme, updateUserAvatar } from "./auth-operations.js";

const initialState = {
    user: {},
    token: '',
    isLoggedIn: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.pending, pending)
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(registerThunk.rejected, rejected)
            .addCase(logIn.pending, pending)
            .addCase(logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logIn.rejected, rejected)
            .addCase(logOut.pending, pending)
            .addCase(logOut.fulfilled, (state) => {
                state.user = {};
                state.token = '';
                state.isLoggedIn = false;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logOut.rejected, rejected)
            .addCase(getCurrentUser.pending, pending)
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.isLoading = false;
                state.token = null;
            })
            .addCase(updateUserInfo.pending, pending)
            .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
                state.user = {...state.user, ...payload.user};
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateUserInfo.rejected, rejected)
            .addCase(updateUserTheme.pending, pending)
            .addCase(updateUserTheme.fulfilled, (state, { payload }) => {
                state.user.theme = payload.user.theme;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateUserTheme.rejected, rejected)
            .addCase(updateUserAvatar.pending, pending)
            .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
                state.user.avatar = payload.user.avatar;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateUserAvatar.rejected, rejected)
    }
});

export const authReducer = authSlice.reducer;