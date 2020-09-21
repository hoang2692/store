import * as types from './../constants/actionTypes'

var initialState = {
    id: '',
    name: '',
    status: false
};

var myReducer = (state= initialState,action) =>{
    switch(action.type){
        case types.EDDIT_ITEM:
            return action.tasks;
        default: return state;
}
}

export default myReducer;