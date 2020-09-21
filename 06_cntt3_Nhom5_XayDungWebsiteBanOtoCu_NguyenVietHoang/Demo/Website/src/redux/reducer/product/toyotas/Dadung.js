import { GET_TOYOTA_PRODUCTS_SUCCESS, GET_TOYOTA_SADAN_SUCCESS, GET_TOYOTA_DADUNG_SUCCESS, ADD_TOYOTA_DADUNG_SUCCESS, UPDATE_TOYOTA_DADUNG_REQUEST, UPDATE_TOYOTA_DADUNG_SUCCESS, DELETE_TOYOTA_DADUNG_SUCCESS } from "../../../types/productsToyota";


var initialState = {
  data: []
};

var findID = (data, id) => {
  var result = -1;
  data.forEach((data, index) => {
    if (data.id === id) {
      result = index;
    }
  });
  return result;
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    //GET API PUBLIC
    case GET_TOYOTA_DADUNG_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload
      };
    
      case ADD_TOYOTA_DADUNG_SUCCESS:
        return {
          ...state,
          data: [...state.data,action.payload]
        }


        case DELETE_TOYOTA_DADUNG_SUCCESS:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload)
      }
        case UPDATE_TOYOTA_DADUNG_SUCCESS:
          var index = -1;
          index = findID(state.data,action.payload.id)
          state.data[index] = action.payload;
          return {
            data: [...state.data]
          }

    default:
      break;
  }
  return state;
};

export default reducer;
