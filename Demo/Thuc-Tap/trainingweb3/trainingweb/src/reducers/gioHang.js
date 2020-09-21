import * as types from './../constants/ActionStyle';

var defaultState = [
]

const GioHang = (state=defaultState,action) =>{
    var {sanPham,soluong} = action;
    var index= -1;
    switch(action.type)
    {
        case types.ADD_CART:
            index = checkID (state, sanPham)
            if(index !== -1)
            {
                state[index].soLuong += soluong;
            }else{
            state.push({
                sp: sanPham,
                soLuong: soluong
            })}
            return [...state]

        case types.DELETE_CARD_ITEM:
            console.log(action)
            index= checkID(state,sanPham);
            if(index !== -1)
            {
                state.splice(index,1)
            }
            return [...state]
        default: return state;
    }
}

var checkID = (state,sanpham) =>{
    var index= -1;
    if(state.length > 0)
    {
        for(var i = 0; i < state.length; i++)
        {
            if(state[i].sp.id === sanpham.id)
            {
                index=i;
                break;
        }
        }
    }
    return index;
}


export default GioHang;