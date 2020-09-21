const ACTION = "REGISTER_WITH_EMAIL";
const ACTION_SUCCESS = ACTION + "_SUCCESS";
const ACTION_ERROR = ACTION + "_ERROR";

const registerWithEmail = (data) => ({
  type: ACTION,
  data,
});

const onSuccess = (result) => ({
  type: ACTION_SUCCESS,
  result,
});

const onFailure = (error) => ({
  type: ACTION_ERROR,
  error,
});

const initialState = {
  successStack: 0,
  errorStack: 0,
};

export { registerWithEmail, onSuccess, onFailure, ACTION };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        successStack: state.successStack + 1,
      };

    case ACTION_ERROR:
      return {
        ...state,
        errorStack: state.errorStack + 1,
      };

    default:
      return state;
  }
};
