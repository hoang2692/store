import {
  sendStart,
  sendFailure,
  sendSuccess,
  requestStart,
  requestSuccess,
  requestFailure
} from "./reducer";
import sendAndRequestRepository from "./repository";

/**
 * Handle logic for submit send coins
 */
export function sendCoin(data, cb) {
  return async dispatch => {
    try {
      dispatch(sendStart());
      const { data: resData, errors } = await sendAndRequestRepository.sendCoin(
        data
      );

      if (resData) {
        dispatch(sendSuccess());
        // do callback
        cb && cb(true);
      } else {
        dispatch(sendFailure({ errors }));
        // do callback
        cb && cb(false);
      }
    } catch (e) {
      console.log("Application error:", e);
    }
  };
}

export function createRequest(params, cb) {
  return async dispatch => {
    try {
      dispatch(requestStart());
      const { data, errors } = await sendAndRequestRepository.request(params);

      if (data) {
        dispatch(requestSuccess({ data }));
        // do callback
        cb && cb(true);
      } else {
        dispatch(requestFailure({ errors }));
        // do callback
        cb && cb(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
}
