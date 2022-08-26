import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import auth from './auth/auth';
import { authApi } from './auth/authApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
