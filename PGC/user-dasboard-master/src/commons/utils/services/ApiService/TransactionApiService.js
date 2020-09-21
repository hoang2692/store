import apiService from ".";
import queryString from "query-string";
/**
 * Define name for entity
 */
const entityName = "transactions";

/**
 * Create new api service entiry
 */
apiService.createEntity({ name: entityName });

const transactionApiService = apiService.getEndpoints()[entityName];

/**
 * Custom method get all my transactions
 */
transactionApiService.myTransactions = ({ params }) => {
    const paramsUrl = queryString.stringify(params);
    return apiService.handleResponse(() =>
        apiService.getAxiosInstance().get(`${entityName}/ofUser?${paramsUrl}`)
    );
};

/**
 * export api
 */
export default transactionApiService;
