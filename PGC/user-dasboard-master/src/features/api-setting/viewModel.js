import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ApiSetting from "./view";
import {
  getListApiSetting,
  createApiSetting,
  updateApiSetting,
  deleteApiSetting,
  getApiSecret
} from "./model/actions";
import { clearApiSecret } from "./model/reducer";

export default function ApiSettingPage() {
  /**
   * Read state
   */
  const createLoading = useSelector(
    state => state.apiSettingState.create.isFetching
  );

  const updateLoading = useSelector(
    state => state.apiSettingState.update.isFetching
  );

  const getApiSecretLoading = useSelector(
    state => state.apiSettingState.secret.isFetching
  );

  const apiSettingData = useSelector(state => state.apiSettingState.data);
  const apiSettingLoading = useSelector(
    state => state.apiSettingState.isFetching
  );
  const totalApiSettings = useSelector(
    state => state.apiSettingState.totalApiSettings
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListApiSetting({}));
  }, []);

  const handleCreateApiApp = (values, cb) => {
    dispatch(createApiSetting(values, cb));
  };

  const handleOnChangePage = page => {
    dispatch(getListApiSetting({ page }));
  };

  const handleUpdateApiApp = (values, cb) => {
    dispatch(updateApiSetting(values, cb));
  };

  const handleDeleteApiApp = (id, cb) => {
    dispatch(deleteApiSetting(id, cb));
  };

  const handleGetApiSecret = (values, cb) => {
    dispatch(getApiSecret(values, cb));
  };

  const handleOnClearSecret = () => {
    dispatch(clearApiSecret());
  };

  return (
    <ApiSetting
      /**
       * create
       * */
      onCreateApp={handleCreateApiApp}
      createLoading={createLoading}
      /**
       * update
       * */
      onUpdateApp={handleUpdateApiApp}
      updateLoading={updateLoading}
      /**
       * Delete
       */
      onDeleteApp={handleDeleteApiApp}
      /**
       * Secret
       */
      getApiSecretLoading={getApiSecretLoading}
      onGetApiSecret={handleGetApiSecret}
      onClearSecret={handleOnClearSecret}
      /**
       * List
       */
      apiSettingData={apiSettingData}
      totalApiSettings={totalApiSettings}
      onChangePage={handleOnChangePage}
      tableLoading={apiSettingLoading}
    />
  );
}
