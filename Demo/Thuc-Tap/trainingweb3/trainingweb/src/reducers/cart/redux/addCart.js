//Khởi tạo type
const ACTION_HANDLE = "HANDLE_CART";
const ACTION = "ORDER";
const ACTION_SUCCESS = ACTION + "_SUCCESS";
const ACTION_ERROR = ACTION + "_ERROR";

//({}) = {return}
//Hàm thêm vào giỏ hàng
const handleCart = (status, data) => ({
  type: ACTION_HANDLE,
  data,
  status,
});

//Hàm đặt hàng
const paymentCart = (data) => ({
  type: ACTION,
  data,
});

//Hàm gọi sau khi payment thành công
const onSuccess = (result) => ({
  type: ACTION_SUCCESS,
  result,
});

//Hàm gọi khi payment thất bại
const onFailure = (error) => ({
  type: ACTION_ERROR,
  error,
});

//Giá trị ban đầu
const initialState = {
  data: [],
  successStack: 0,
  errorStack: 0,
};

export { ACTION, handleCart, paymentCart, onSuccess, onFailure };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_HANDLE: {
      let data = state.data;
      let idx = data.map((e) => e.sp).indexOf(action.data.sp);
      if (idx == -1) {
        data.push({
          sp: action.data.sp,
          sl: action.data.sl,
        });
      } else {
        data[idx]["sl"] = data[idx]["sl"] + (action.status ? 1 : -1);
      }

      return {
        ...state,
        data: data,
      };
    }

    default:
      return { ...state };
  }
};
