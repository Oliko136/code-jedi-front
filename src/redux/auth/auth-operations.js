import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from '../../api/auth-api.js';

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, {rejectWithValue}) => {
        try {
            const data = await authAPI.register(credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authAPI.logIn(credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
        try {
            await authAPI.logOut();
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
});

export const getCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const data = await authAPI.getCurrentUser(auth.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
);


// export const registerThunk = createAsyncThunk(
//     'auth/register',
//     async (credentials, thunkAPI) => {
//       try {
//         const { data } = await axiosInstance.post(
//           ENDPOINTS.auth.register,
//           credentials
//         );
//         setAuthorizationHeader(data.user.tokenAccess);
  
//         return data;
//       } catch (error) {
//         toast.error(error.response.data.message, TOASTER_CONFIG);
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );
  