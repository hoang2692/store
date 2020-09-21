import {
  getListApiSettingStart,
  getListApiSettingSuccess,
  getListApiSettingFailure,
  createApiSettingStart,
  createApiSettingSuccess,
  createApiSettingFailure,
  updateApiSettingStart,
  updateApiSettingSuccess,
  updateApiSettingFailure,
  deleteApiSettingStart,
  deleteApiSettingSuccess,
  deleteApiSettingFailure,
  getSecretKeyStart,
  getSecretKeySuccess,
  getSecretKeyFailue
} from "./reducer";
import apiSettingRepository from "./repository";

/**
 * Handle logic for register app
 */
export function getListApiSetting({ page = 1 }, cb) {
  return async dispatch => {
    dispatch(getListApiSettingStart());

    const {
      data,
      totalApiSettings,
      errors
    } = await apiSettingRepository.getListApiSetting({
      page
    });

    if (data) {
      dispatch(getListApiSettingSuccess({ data, totalApiSettings }));
      cb && cb(true);
    } else {
      dispatch(getListApiSettingFailure({ errors }));
      cb && cb(false);
    }
  };
}

/**
 * Handle create logic
 */

export function createApiSetting(params, cb) {
  return async dispatch => {
    dispatch(createApiSettingStart());

    const { data, errors } = await apiSettingRepository.createApiSetting({
      ...params
    });

    if (data) {
      dispatch(createApiSettingSuccess({ data }));
      cb && cb(true);
    } else {
      dispatch(createApiSettingFailure({ errors }));
      cb && cb(false);
    }
  };
}

/**
 * Handle update logic
 */

export function updateApiSetting(params, cb) {
  return async dispatch => {
    dispatch(updateApiSettingStart());

    const { data, errors } = await apiSettingRepository.updateApiSetting({
      id: params.id,
      name: params.name,
      webhookURL: params.webhookURL
    });

    if (data) {
      dispatch(
        updateApiSettingSuccess({
          data: {
            ID: params.id,
            name: params.name,
            webhookURL: params.webhookURL
          }
        })
      );
      cb && cb(true);
    } else {
      dispatch(updateApiSettingFailure({ errors }));
      cb && cb(false);
    }
  };
}

/**
 * Handle Delete logic
 */

export function deleteApiSetting(id, cb) {
  return async dispatch => {
    dispatch(deleteApiSettingStart());

    const { data, errors } = await apiSettingRepository.deleteApiSetting({
      id
    });

    if (data) {
      dispatch(
        deleteApiSettingSuccess({
          id
        })
      );
      cb && cb(true);
    } else {
      dispatch(deleteApiSettingFailure({ errors }));
      cb && cb(false);
    }
  };
}

/**
 * Handle Delete logic
 */

export function getApiSecret({ id, password }, cb) {
  return async dispatch => {
    dispatch(getSecretKeyStart());

    const { data, errors } = await apiSettingRepository.getSecretKey({
      id,
      password
    });

    console.log(data);

    if (data) {
      dispatch(
        getSecretKeySuccess({
          id,
          apiSecret: data
        })
      );
      cb && cb(true);
    } else {
      dispatch(getSecretKeyFailue({ errors }));
      cb && cb(false);
    }
  };
}
