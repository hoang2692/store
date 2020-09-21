import { combineReducers } from "redux";
import taskReducer from "./Task";


const rootreducer = combineReducers({
   task: taskReducer,
});
export default rootreducer;