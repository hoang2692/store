import * as types from '../contants/Actionstyle';
import callAPI from '../utils/APIcallor';

export const fetchApiRequest= ()=>{
    return (dispatch)=>{
        return callAPI('products', 'GET', null).then(res =>{
            dispatch(fetchApi(res.data))
        })
    }
}


export const fetchApi = (products) =>{
    return {
        type: types.FETCH_API,
        products
    }
}

export const delateItemRequest= (id) =>{
    return(dispatch)=>{
        return callAPI(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(deleteItem(id))
        })
    }
    }


export const deleteItem = (id) =>{
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}


export const addProductsRequest= (products) =>{
    return (dispatch) =>{
        return callAPI('products', 'POST', products).then(res =>{
            dispatch(addProducts(res.data))
        })
    }
}
export const addProducts = (products) =>{
    return {
        type: types.ADD_PRODUCTS,
        products
    }
}


export const edditProductsRequest= (id) =>{
    console.log(id)
    return (disptach) =>{
        return callAPI(`products/${id}`, 'GET' , null).then(res =>{
            disptach(edditProducts(res.data))
    })}
}

export const edditProducts= (products) =>{
    return {
    type: types.EDDIT_PRODUCTS,
    products
    }
}

export const updateProductsRequest = (products) =>{
    return (dispatch) =>{
        return callAPI(`products/${products.id}`, 'PUT', products).then(res =>{
            dispatch(updateProducts(res.data))
        })
    }
}

export const updateProducts = (products) =>{
    return {
        type: types.UPDATE_PRODUCTS,
        products
    }
}

export const fetchApiProductRequest = (id) =>{
    return (disptach) =>{
        return callAPI(`products/${id}`, 'GET' , null).then(res =>{
            disptach(fetchApiProduct(res.data))
    })}
}


export const fetchApiProduct = (products) =>{
    return {
        type: types.FETCH_API_PRODUCT,
        products
    }
}