import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLogin: false,
  loading: false,
  isLoadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.isLogin = false;
      },
    
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
        store.isLogin = true;
        store.error = null;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.isLogin = false;
      },
    
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
        store.isLogin = false;
        store.error = null;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      },
    
    [current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload;
        store.isLogin = true;
        store.error = null;
    },
    [current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
