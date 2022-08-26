import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;
          state.name = user.name;
          state.email = user.email;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.currentUser.matchRejected, state => {
        state = initialState;
      })
      .addMatcher(
        authApi.endpoints.signUp.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;
          state.name = user.name;
          state.email = user.email;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.logOut.matchFulfilled,
        (state, { payload }) => {
          const { token } = payload;
          state.name = null;
          state.email = null;
          state.token = token;
          state.isLoggedIn = false;
        }
      );
  },
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
