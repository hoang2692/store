import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  send: {
    errors: [],
    isFetching: false
  },
  request: {
    errors: [],
    isFetching: false,
    data: null
  }
};

const sendAndRequestSlice = createSlice({
  name: "sendAndRequest",
  initialState,
  reducers: {
    /**
     * Reset
     */
    resetSendAndRequestState: () => initialState,
    /** Handle state for send */
    sendStart: state => {
      state.send.isFetching = true;
      state.send.errors = [];
    },
    sendSuccess: state => {
      state.send.isFetching = false;
    },
    sendFailure: (state, action) => {
      const { errors } = action.payload;
      state.send.errors = errors;
      state.send.isFetching = false;
    },
    /** Handle sate for request */
    requestStart: state => {
      state.request.isFetching = true;
      state.request.errors = [];
    },
    requestSuccess: (state, action) => {
      state.request.data = action.payload.data;
      state.request.isFetching = false;
    },
    requestFailure: (state, action) => {
      const { errors } = action.payload;
      state.request.errors = errors;
      state.request.isFetching = false;
      state.request.data = null;
    }
  }
});

export const {
  sendStart,
  sendSuccess,
  sendFailure,
  requestStart,
  requestSuccess,
  requestFailure
} = sendAndRequestSlice.actions;

export default sendAndRequestSlice.reducer;
