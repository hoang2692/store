import * as types from './../constants/actionTypes'

export const listAll = () => {
    return {
    type: types.LIST_ALL
    }
}

export const addTask = (tasks) =>{
    return {
    type: types.ADD_TASK,
    tasks
    }
}

export const toggleForm = () =>{
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () =>{
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const unpdatestatus = (id) =>{
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
}

export const delateItem = (id) =>{
    return {
        type: types.DELETE_ITEM,
        id
    }
}

export const edditItem = (tasks) =>{
    return {
        type: types.EDDIT_ITEM,
        tasks
    }
}


export const filterTable = (filter) =>{
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

export const search = (keyword)=>{
    return{
        type: types.SEARCH,
        keyword
    }
}

export const sort = (keyStatus) =>{
    return{
        type:types.SORT,
        keyStatus
    }
}