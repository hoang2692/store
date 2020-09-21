import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";

const initialState = {
  errors: [],
  isFetching: false
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetRegisterState: () => initialState,
    /**
     * register
     */
    registerStart: (state, action) => {
      state.isFetching = true;
      state.errors = [];
    },
    registerSuccess: state => {
      state.isFetching = false;
    },
    registerFailure: (state, action) => {
      const { errors = [] } = action.payload;
      state.isFetching = false;
      state.errors = errors;
    }
  }
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  resetRegisterState
} = registerSlice.actions;

export default registerSlice.reducer;
