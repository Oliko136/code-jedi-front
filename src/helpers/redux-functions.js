export const pending = (state) => {
    state.isLoading = true;
}

export const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}