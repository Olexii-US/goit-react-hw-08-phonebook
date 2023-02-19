import { register } from './authThunk';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        return state;
      })
      .addCase(register.rejected, (state, action) => {
        return state;
      });
    // .addCase(fetchContacts.pending, handlePending)
    // .addCase(fetchContacts.fulfilled, (state, { payload }) => {
    //   state.contacts.isLoading = false;
    //   state.error = null;
    //   state.contacts.items = payload;
    // })
    // .addCase(fetchContacts.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
