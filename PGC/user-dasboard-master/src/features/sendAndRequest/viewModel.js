import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import SendAndRequestView from "./view";
import i18n from "../../commons/utils/locales/i18n";

import { sendCoin, createRequest } from "./model/actions";

export default function SendAndRequest() {
  /** Get states */
  const sendErrors = useSelector(
    state => state.sendAndRequestState.send.errors
  );
  const sendIsFetching = useSelector(
    state => state.sendAndRequestState.send.isFetching
  );

  const requestErrors = useSelector(
    state => state.sendAndRequestState.request.errors
  );
  const requestIsFetching = useSelector(
    state => state.sendAndRequestState.request.isFetching
  );

  const requestData = useSelector(state =>
    _.get(state, "sendAndRequestState.request.data")
  );

  const dispatch = useDispatch();

  /**
   * Doing submit
   */
  const handleOnSubmit = (values, cb) => {
    dispatch(sendCoin(values, cb));
  };

  /**
   * Handle create request
   */
  const handleOnRequestSubmit = (values, cb) => {
    dispatch(createRequest(values, cb));
  };

  return (
    <SendAndRequestView
      onSendSubmit={handleOnSubmit}
      onRequestSubmit={handleOnRequestSubmit}
      sendLoading={sendIsFetching}
      sendErrors={sendErrors}
      requestLoading={requestIsFetching}
      requestErrors={requestErrors}
      requestData={requestData}
    />
  );
}
