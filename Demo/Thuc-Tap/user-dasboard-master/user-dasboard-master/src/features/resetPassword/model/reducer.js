import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";

const initialState = {
  errors: [],
  isFetching: false
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetResetPasswordState: () => initialState,
    /**
     * reset password
     */
    resetPasswordStart: (state, action) => {
      state.isFetching = true;
      state.errors = [];
    },
    resetPasswordSuccess: state => {
      state.isFetching = false;
    },
    resetPasswordFailure: (state, action) => {
      const { errors = [] } = action.payload;
      state.isFetching = false;
      state.errors = errors;
    }
  }
});

export const {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  resetRegisterState
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
