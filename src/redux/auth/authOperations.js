
export const registerThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const { data } = await axiosInstance.post(
          ENDPOINTS.auth.register,
          credentials
        );
        setAuthorizationHeader(data.user.tokenAccess);
  
        return data;
      } catch (error) {
        // toast.error(error.response.data.message, TOASTER_CONFIG);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  