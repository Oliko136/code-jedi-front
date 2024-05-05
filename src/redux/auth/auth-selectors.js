export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectUserTheme = state => state.auth.user.theme;
export const selectUserAvatar = state => state.auth.user.avatar;
export const selectToken = state => state.auth.token;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;