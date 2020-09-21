import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";

const initialState = {
  errors: [],
  isFetching: false,
};

const verifyEmailSlice = createSlice({
  name: "verifyEmail",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetLoginState: () => initialState,
    /**
     * handle request login
     */
    verifyEmailStart: state => {
      // Re new verify status
      state.isFetching = true;
      state.errors = [];
    },
    verifyEmailSuccess: (state, action) => {
      state.isFetching = false;
      state.errors = [];
    },
    verifyEmailFailure: (state, action) => {
      const { errors } = action.payload;
      state.isFetching = false;
      state.errors = errors;
    },
  }
});

export const {
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
  resetVerifyEmailState
} = verifyEmailSlice.actions;

export default verifyEmailSlice.reducer;
