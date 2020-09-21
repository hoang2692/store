import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Transaction from "./view";
import {
  getListTransactions,
} from "./model/actions";

export default function TransactionPage() {
  /**
   * Read state
   */
  const transactionData = useSelector(state => state.transactionState.data);
  const transactionLoading = useSelector(
    state => state.transactionState.isFetching
  );
  const totalTransactions = useSelector(
    state => state.transactionState.totalTransactions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTransactions({}));
  }, []);

  const handleOnChangePage = (page = 1, pageSize = 10, options = {}) => {
    dispatch(getListTransactions({ page, limit: pageSize, options }));
  };

  return (
    <Transaction
      transactionData={transactionData}
      totalTransactions={totalTransactions}
      onChangePage={handleOnChangePage}
      tableLoading={transactionLoading}
    />
  );
}
