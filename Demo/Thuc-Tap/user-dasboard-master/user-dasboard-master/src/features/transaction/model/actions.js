import {
  getListTransactionsStart,
  getListTransactionsSuccess,
  getListTransactionsFailure,
} from "./reducer";
import transactionRepository from "./repository";

/**
 * Handle logic for get transactions
 */
export function getListTransactions({ page = 1, limit = 10, options }, cb) {
  return async dispatch => {
    dispatch(getListTransactionsStart());
    const {
      data,
      totalTransactions,
      pages,
      errors
    } = await transactionRepository.getListTransactions({
      page, limit, ...options,
    });

    if (data) {
      dispatch(getListTransactionsSuccess({ data, totalTransactions, pages }));
      cb && cb(true);
    } else {
      dispatch(getListTransactionsFailure({ errors }));
      cb && cb(false);
    }
  };
}