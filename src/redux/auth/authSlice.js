import { register, logIn, logOut, refreshUser } from './authThunk';
import { toast } from 'react-toastify';

const { createSlice } = require('@reduxjs/toolkit');
const handlePending = state => {
  state.isAuthLoading = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.error.message);
        state.isAuthLoading = false;
        return state;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        toast.error(action.error.message);
        state.isAuthLoading = false;
        return state;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        toast.error(action.error.message);
        state.isAuthLoading = false;
        return state;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        return state;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        return state;
      });
  },
});

export const authReducer = authSlice.reducer;
