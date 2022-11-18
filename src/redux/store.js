import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice, filterSlice } from './contacts-slice';

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authSlice from './auth-slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice);


export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



