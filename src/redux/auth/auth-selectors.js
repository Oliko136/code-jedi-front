export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;