import { GETEDIT_MER_SALOONS_SUCCESS, GETEDIT_MER_SUV_SUCCESS, GETEDIT_MER_COPEE_SUCCESS } from "../../../types/productsMer";

  
  var initialState = {
    data: {},
  };
  let reducer = (state = initialState, action) => {
    switch (action.type) {
      case GETEDIT_MER_SALOONS_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GETEDIT_MER_SUV_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
  
      case GETEDIT_MER_COPEE_SUCCESS:
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
  