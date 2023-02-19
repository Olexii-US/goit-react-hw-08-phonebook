import { publicApi } from 'api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const res = await publicApi.post('/users/signup', credentials);
    // const res = await axios.post(
    //   'https://connections-api.herokuapp.com/users/signup',
    //   credentials
    // );
    return res;
  }
);
