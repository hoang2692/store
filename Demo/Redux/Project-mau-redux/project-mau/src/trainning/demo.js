import {createStore} from 'redux';

var initialState = {
	status: false,
	sort:{
		by:'name',
		value:1
	}
}

var myReducer = (state=initialState,action) =>{
	if(action.type==='TOGGLE_STATUS'){
		state.status =! state.status;
	}
	if(action.type==='SORT'){
	var {by,value} = action.sort;
		var {status}=state;
		return{
			status:status,
		   	sort:{
		   	by:by,
		   	value:value
		   }
		}
	}
	return state;
}

const store= createStore(myReducer);
console.log(store.getState());
// Thực hiện công việc thay đổi status
var action ={type:'TOGGLE_STATUS'};
store.dispatch(action);
console.log(store.getState());

var SortAction={
	type:'SORT',
	sort :{
		by:'name',
		value:-1
	}

}

store.dispatch(SortAction);
console.log(store.getState());


