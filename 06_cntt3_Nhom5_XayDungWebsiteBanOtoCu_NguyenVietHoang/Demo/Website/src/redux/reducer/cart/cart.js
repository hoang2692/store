import { ADD_CART_SUCCESS, ADD_CART_REQUEST } from "../../types/cart";

var data =JSON.parse(localStorage.getItem("CART"));


var initialState = data ? data : [];
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      console.log(action.item)
      localStorage.setItem("CART",JSON.stringify(action.item));
      return action.item

    case ADD_CART_REQUEST:
      localStorage.removeItem("CART");
      return null
    default:
      break;
  }
  return state;
};

export default reducer;
