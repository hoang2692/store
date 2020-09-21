import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";

const initialState = {
  errors: [],
  isFetching: false,
  isAuthenticated: false,
  /** Authenticate state */
  isAuthenticateFetching: false,
  authenticateErrors: []
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetLoginState: () => initialState,
    /**
     * handle request login
     */
    loginStart: state => {
      // Re new login status
      state.isFetching = true;
      state.errors = [];
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.errors = [];
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      const { errors } = action.payload;
      state.isFetching = false;
      state.errors = errors;
    },
    /**
     * handle request authenticate
     */
    authenticateStart: state => {
      // Re new authenticate status
      state.isAuthenticateFetching = true;
      state.authenticateErrors = [];
    },
    authenticateSuccess: (state, action) => {
      state.isAuthenticateFetching = false;
      state.authenticateErrors = [];
      state.isAuthenticated = true;
    },
    authenticateFailure: (state, action) => {
      const { errors } = action.payload;

      state.isAuthenticated = false;
      state.isAuthenticateFetching = false;
      state.authenticateErrors = errors;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  authenticateStart,
  authenticateSuccess,
  authenticateFailure,
  resetLoginState
} = loginSlice.actions;

export default loginSlice.reducer;
