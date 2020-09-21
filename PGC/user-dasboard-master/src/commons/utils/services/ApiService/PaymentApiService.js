import apiService from ".";

/**
 * Define name for entity
 */
const entityName = "payment";

/**
 * Create new api service entiry
 */
apiService.createEntity({ name: entityName });

const paymentApiService = apiService.getEndpoints()[entityName];

/**
 * Custom method send
 */
paymentApiService.sendCoin = ({ method, toAddress, amount }) => {
  return apiService.handleResponse(() =>
    apiService
      .getAxiosInstance()
      .post(`${entityName}/${method}`, { toAddress, amount })
  );
};

/**
 * Custom method request
 */
paymentApiService.request = ({ method }) => {
  return apiService.handleResponse(() =>
    apiService.getAxiosInstance().post(`${entityName}/${method}/request`)
  );
};

/**
 * export api
 */
export default paymentApiService;
