import {
  GETEDIT_TOYOTA_SADAN_SUCCESS,
  GETEDIT_TOYOTA_SUVTOYOTAS_SUCCESS,
  GETEDIT_TOYOTA_DADUNG_SUCCESS,
} from "../../../types/productsToyota";

var initialState = {
  data: {},
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETEDIT_TOYOTA_SADAN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case GETEDIT_TOYOTA_SUVTOYOTAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case GETEDIT_TOYOTA_DADUNG_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
