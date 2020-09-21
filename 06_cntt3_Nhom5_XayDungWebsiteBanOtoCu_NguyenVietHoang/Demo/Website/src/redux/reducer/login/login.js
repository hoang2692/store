import { LOGIN_ADMIN_SUCCESS, LOGOUT_ADMIN_SUCCESS } from "../../types/login";

var data =JSON.parse(localStorage.getItem("LOGIN"));


var initialState = 
{
    isLogin: data
}
let reducer = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN_ADMIN_SUCCESS:
          localStorage.setItem("LOGIN", action.payload)
          return {
              isLogin: action.payload
          }
    case LOGOUT_ADMIN_SUCCESS:
        localStorage.removeItem("LOGIN")
        return {
            isLogin: null
        }
    default:
      break;
  }
  return state;
};

export default reducer;
