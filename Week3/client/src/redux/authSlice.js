import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currectUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      currentInformation: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    loginStart: (state) => {
        state.login.isFetching =true;
    },
    loginSuccess: (state, action) => {
        state.login.isFetching = false;
        state.login.currectUser = action.payload;
        state.login.error = false
    },
    loginFailed: (state) => {
        state.login.isFetching=false;
        state.login.error=true
    },
    registerStart:(state) => {
      state.register.isFetching = false;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.currentInformation = action.payload;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.error=false;
    }
  },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed
} = authSlice.actions;

export default authSlice.reducer;
