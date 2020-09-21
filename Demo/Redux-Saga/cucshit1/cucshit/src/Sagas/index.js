import { fork ,take,call,put} from "redux-saga/effects";
import * as taskType from "./../Constants/task";
import { STATUS} from "./../Constants/index";
function* FecthListTask() {
   yield take(taskType.FETCH_TASK);

     const resp=yield call (STATUS);
  console.log("resp:",resp);
}

function* CreateListtask() {
  console.log("create task list");
}

function* rootSaga() {
  yield fork(FecthListTask);
  yield fork(CreateListtask);
}
export default rootSaga;
