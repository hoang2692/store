import { createSlice } from "@reduxjs/toolkit";
// import update from "immutability-helper";

const initialState = {
  userData: undefined,
  errors: [],
  isFetchingUserData: false
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetProfileState: () => initialState,
    /**
     * store user data
     */
    storeUserData: (state, action) => {
      state.userData = action.payload.userData;
    }
  }
});

export const { storeUserData, resetProfileState } = profileSlice.actions;

export default profileSlice.reducer;
