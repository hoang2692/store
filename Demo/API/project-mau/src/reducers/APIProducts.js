import * as types from '../contants/Actionstyle';

var defaultState= [];


const ApiProducts = (state=defaultState, action) =>{
        switch(action.type)
        {
            case types.FETCH_API_PRODUCT:
                return action.products.products2;
            default: return state;
        }
} 


export default ApiProducts;