import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  data: [],
  page: 1,
  pages: 1,
  totalTransactions: 1,
  errors: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetTransactionsState: () => initialState,
    /**
     * Get list api settings
     */
    getListTransactionsStart: state => {
      state.isFetching = true;
      state.errors = [];
    },
    getListTransactionsSuccess: (state, action) => {
      const { data, totalTransactions, pages } = action.payload;
      state.isFetching = false;
      state.data = data;
      state.pages = pages;
      state.totalTransactions = totalTransactions;
    },
    getListTransactionsFailure: (state, action) => {
      const { errors } = action.payload;

      state.isFetching = false;
      state.errors = errors;
    },
  }
});

export const {
  resetTransactionsState,
  getListTransactionsStart,
  getListTransactionsSuccess,
  getListTransactionsFailure,
} = transactionSlice.actions;

export default transactionSlice.reducer;
