import {combineReducers} from 'redux';
import Product from './products';
import ItemEdit from './editItem';
import ApiProducts from './APIProducts';


const myReducer=combineReducers({
    Product,
    ItemEdit,
    ApiProducts
});

export default myReducer;