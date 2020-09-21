// const initialState = {
//     list:[]
// }
// export default (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

import { combineReducers } from 'redux';

import { default as categoriesReducer } from './categories'
import { default as cateEditReducer } from './cateEdit'
import { default as productsReducer } from './product/products'
import { default as productsAdminReducer } from './product/productAdmin'
import { default as cartReducer } from './cart/cart'

const reducer = combineReducers({
  categories: categoriesReducer,
  cateEdit: cateEditReducer,
  products: productsReducer,
  productsAdmin: productsAdminReducer,
  cart: cartReducer
});

export default reducer;