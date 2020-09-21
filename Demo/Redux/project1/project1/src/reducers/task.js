import * as types from './../constants/actionTypes'

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
var grenerateID = () => {
    return s4() + s4() + s4() + s4();
  }

var  findIndex =(tasks,id) =>{
    var result = -1;
    tasks.forEach((task, index) =>{
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }

var initialState = [
    {id:grenerateID(),
    name: 'Hoang',
    status: true},
    {id:grenerateID(),
      name: 'Phuong',
      status: false}
];

var myReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case types.LIST_ALL: return state;
        case types.ADD_TASK:
            var task = {
                id: action.tasks.id,
                name: action.tasks.name,
                status: action.tasks.status
            };
            if(!task.id){
              task.id = grenerateID();
              state.push(task);
            }else{
              index= findIndex(state,task.id);
              state[index] = task
            }
            return [...state];
        case types.UPDATE_STATUS_TASK:
            var id = action.id;
            var index = findIndex(state,id);
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            return [...state];
        case types.DELETE_ITEM:
            id = action.id;
            index= findIndex(state,id);
            state.splice(index,1);
            return [...state]
        default: return state;
    }
};


export default myReducer;