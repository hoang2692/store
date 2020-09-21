import * as types from './../constants/actionTypes'

var initialState = {
    by: '',
    value: 1
};

var myReducer = (state= initialState,action) =>{
    switch(action.type){
        case types.SORT:
            console.log(action);
            return action.keyStatus;
        default: return state;
}
}

export default myReducer;