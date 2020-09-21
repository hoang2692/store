import * as types from './../constants/ActionStyle';

export const addCart = (sanPham,soluong) =>{
    return {
        type:types.ADD_CART,
        sanPham,
        soluong
    }
}

export const deleteCart = (sanPham) =>{
    return {
        type: types.DELETE_CARD_ITEM,
        sanPham
    }
}