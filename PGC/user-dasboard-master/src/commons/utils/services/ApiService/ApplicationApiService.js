import apiService from ".";

/**
 * Define name for entity
 */
const entityName = "applications";

/**
 * Create new api service entiry
 */
apiService.createEntity({ name: entityName });

const applicationApiService = apiService.getEndpoints()[entityName];

applicationApiService.getAll = ({ params } = {}) =>
  apiService.handleResponse(() =>
    apiService.getAxiosInstance().get(`${entityName}/ofUser`, {
      params: { ...params }
    })
  );

applicationApiService.getSecretKey = ({ id, password } = {}) =>
  apiService.handleResponse(() =>
    apiService.getAxiosInstance().post(`${entityName}/${id}`, {
      password
    })
  );

/**
 * export api
 */
export default applicationApiService;
