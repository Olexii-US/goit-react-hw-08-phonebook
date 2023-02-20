import {
  publicApi,
  priveteApi,
  setAuthHeader,
  removeAuthHeader,
} from 'api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const res = await publicApi.post('/users/signup', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const res = await publicApi.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const res = await priveteApi.post('/users/logout');
  removeAuthHeader();
  return res.data;
});
