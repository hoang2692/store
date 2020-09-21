import * as types from '../contants/Actionstyle';

var defaultState= [];


const ItemEdit = (state=defaultState, action) =>{
        switch(action.type)
        {
            case types.EDDIT_PRODUCTS:
                return action.products;
            default: return state;
        }
} 


export default ItemEdit;