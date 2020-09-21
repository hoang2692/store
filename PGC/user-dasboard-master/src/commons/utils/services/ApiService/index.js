import Axios from "axios";
import _ from "lodash";
import constants from "../../../constants";
import loginRepository from "../../../../features/login/model/repository";
import { getArrayOfErrors } from "../../helpers/api";

class ApiServices {
  constructor(baseURL) {
    let baseUrl = baseURL;
    let endpoints = {};

    const instance = Axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json"
      }
    });

    instance.interceptors.request.use(
      async function(config) {
        const data = await loginRepository.getLoginAccessToken();
        if (data && data.token) config.headers.accesstoken = data.token;
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );

    this.getBaseUrl = () => {
      return baseUrl;
    };

    this.getAxiosInstance = () => {
      return instance;
    };

    this.getEndpoints = () => {
      return endpoints;
    };

    this.setEndpoints = newEndpoints => {
      endpoints = newEndpoints;
    };
  }

  /**
   * Create and store a single enitity's endpoints
   * @param {A antity object} entity
   */
  createEntity(entity) {
    const currentEndpoints = this.getEndpoints();

    currentEndpoints[entity.name] = this.createBasicCRUDEndpoints(entity);

    this.setEndpoints(currentEndpoints);
  }

  createEntities(entities) {
    entities.forEach(this.createEntity.bind(this));
  }

  /**
   * Create the basic endpoins handlers for CRUD operations
   * @param {a entity object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    const endpoints = {};
    const resourceURL = `${this.getBaseUrl()}/${name}`;
    const axiosInstance = this.getAxiosInstance();

    endpoints.getAll = ({ query, params } = {}) =>
      this.handleResponse(() =>
        axiosInstance.get(resourceURL, { params: { query, ...params } })
      );

    endpoints.getOne = ({ id }) =>
      this.handleResponse(() => axiosInstance.get(`${resourceURL}/${id}`));

    endpoints.create = data =>
      this.handleResponse(() => axiosInstance.post(resourceURL, data));

    endpoints.update = data =>
      this.handleResponse(() =>
        axiosInstance.patch(`${resourceURL}/${data.id}`, data)
      );

    endpoints.delete = ({ id }) =>
      this.handleResponse(() => axiosInstance.delete(`${resourceURL}/${id}`));

    return endpoints;
  }

  /**
   * Handle response
   */
  handleResponse = async excute => {
    try {
      const response = await excute();
      const { data } = response;

      return { data };
    } catch (error) {
      console.log("System error: ", error);
      if (error.response) {
        console.log("Server error: ", error.response);
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        // console.log(error.response.status);
        // console.log(error.response.headers);
        const errors = getArrayOfErrors(_.get(error, "response.data.errors"), {
          messages: ["Something is wrong. Please contact admin!"]
        });

        return { errors: errors };
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log("Request error: ", error.request);
        return {
          errors: {
            messages: ["Can not connect to the server, Please try again!"]
          }
        };
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error: ", error);
        return { errors: { messages: [error.message] } };
      }
    }
  };
}

const apiService = new ApiServices(constants.apiUrl);

export default apiService;
