import _ from "lodash";
import transactionApiService from "../../../commons/utils/services/ApiService/TransactionApiService";

const getListTransactions = async ({ page = 1 , limit = 10, type = 'all'}) => {
  try {
    const repsonse = await transactionApiService.myTransactions({
      params: { limit, page, type}
    });

    const { data, errors } = repsonse;
    // list transaction
    const docs = _.get(data, "docs", []);
    const totalTransactions = _.get(data, "total", 1);

    return { data: docs, totalTransactions, errors, pages: data.pages };
  } catch (e) {
    return { errors: ["Un-know"] };
  }
};

const transactionRepository = {
  getListTransactions,
};

export default transactionRepository;
