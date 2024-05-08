import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../api/auth-api.js';
import * as userAPI from '../../api/user-api.js';
// установить react-toastify
// import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authAPI.register(credentials);
      // toast.success('Congratulations! You have successfully registered!');
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
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      await authAPI.logOut(auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

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
    },
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (body, { rejectWithValue }) => {
    try {
      const data = await userAPI.updateUserInfo(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (file, { rejectWithValue }) => {
    try {
      const data = await userAPI.updateUserAvatar(file);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
