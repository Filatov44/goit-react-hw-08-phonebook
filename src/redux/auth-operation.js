import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'services/apiAuth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
        return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      return rejectWithValue(error);
    }
  }
);
// getState - имеет доступ ко всему стейту

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
      const token = auth.token;
      
    if (!token) {
      return rejectWithValue();
    }
    try {
      const result = await api.getCurrentUser(token);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);