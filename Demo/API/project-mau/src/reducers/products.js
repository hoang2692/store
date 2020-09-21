import * as types from '../contants/Actionstyle';



var defaultState=[];



var findID  = (products,id) =>{
    var result= -1;
    products.forEach((product,index) => {
      if(product.id === id){
        result=index;
      }
    });
    return result;
  }


const Product= (state=defaultState,action) =>{
    var index= -1
    switch(action.type)
    {
        case types.FETCH_API:
            return action.products; 
        case types.DELETE_PRODUCTS:
            index= findID(state, action.id)
            if(index !== -1)
            {
              state.splice(index,1)
            }
            return [...state]
        case types.ADD_PRODUCTS:
        state.push(action.products)
        return [...state]
        case types.UPDATE_PRODUCTS:
        index = findID(state, action.products.id);
        state[index] =  action.products;
        return [...state]
        default: return [...state]
    }
}

;

export default Product;