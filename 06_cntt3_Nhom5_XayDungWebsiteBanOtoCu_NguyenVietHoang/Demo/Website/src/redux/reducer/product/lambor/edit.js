import { GETEDIT_LAMBOR_AVENTADOR_SUCCESS, GETEDIT_LAMBOR_SUV_SUCCESS, GETEDIT_LAMBOR_HARUCAN_SUCCESS } from "../../../types/productsLambor";

  
  var initialState = {
    data: {},
  };
  let reducer = (state = initialState, action) => {
    switch (action.type) {
      case GETEDIT_LAMBOR_AVENTADOR_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GETEDIT_LAMBOR_SUV_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GETEDIT_LAMBOR_HARUCAN_SUCCESS:
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
  