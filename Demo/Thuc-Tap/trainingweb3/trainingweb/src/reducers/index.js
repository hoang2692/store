import { combineReducers } from 'redux';
import ThucUong from './thucUong';
import GioHang from './gioHang';

const myReducer = combineReducers({
    ThucUong,
    GioHang
})


export default myReducer;