import _ from "lodash";
import applicationApiService from "../../../commons/utils/services/ApiService/ApplicationApiService";

const getListApiSetting = async ({ page = 1 }) => {
  try {
    const repsonse = await applicationApiService.getAll({
      params: { limit: 10, page }
    });

    const { data, errors } = repsonse;
    // list application
    const docs = _.get(data, "docs", []);
    const totalApiSettings = _.get(data, "total", 1);

    return { data: docs, totalApiSettings, errors };
  } catch (e) {
    console.log(e);
    return { errors: ["Un-know"] };
  }
};

const createApiSetting = async ({ name }) => {
  try {
    const result = await applicationApiService.create({ name });

    const { data, errors } = result;

    return { data, errors };
  } catch (e) {
    console.log(e);
    return { errors: ["Un-know"] };
  }
};

const updateApiSetting = async ({ id, name, webhookURL }) => {
  try {
    const result = await applicationApiService.update({ id, name, webhookURL });

    const { data, errors } = result;

    return { data, errors };
  } catch (e) {
    console.log(e);
    return { errors: ["Un-know"] };
  }
};

const deleteApiSetting = async ({ id }) => {
  try {
    const result = await applicationApiService.delete({ id });

    const { data, errors } = result;

    return { data, errors };
  } catch (e) {
    console.log(e);
    return { errors: ["Un-know"] };
  }
};

const getSecretKey = async ({ password, id }) => {
  try {
    const result = await applicationApiService.getSecretKey({ password, id });

    const { data, errors } = result;

    return { data: data.apiSecret, errors };
  } catch (e) {
    console.log(e);
    return { errors: ["Un-know"] };
  }
};

const apiSettingRepository = {
  getListApiSetting,
  createApiSetting,
  updateApiSetting,
  deleteApiSetting,
  getSecretKey
};

export default apiSettingRepository;
