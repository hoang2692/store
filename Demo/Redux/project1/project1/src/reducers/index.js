import { combineReducers } from 'redux';
import task from './task'
import isDisplayForm from './isDisplayForm';
import edittingItem from './edittingItem';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    task,
    isDisplayForm,
    edittingItem,
    filterTable,
    search,
    sort
})

export default myReducer; 