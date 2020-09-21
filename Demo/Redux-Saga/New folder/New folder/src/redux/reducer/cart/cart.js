import {
  ADD_PRODUCT_CART,
} from "../../types/cart";

var data = JSON.parse(localStorage.getItem('CART'));


var defaultState = data ? data : [];


const  card =(state=defaultState,action) =>{
    var {product,quality} = action;
    // var index = -1;
    switch(action.type)
    {
        case ADD_PRODUCT_CART:
            // index = findId(state,product);
            // if (index !== -1)
            // {
            //     state[index].quality += quality;
            // }else {
                state.push({
                    product: product,
                    quality: quality
                })
            // }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
            

        // case types.DELETE_CARD:
        //     index= findId (state, product);
        //     if(index !== -1)
        //     {
        //         state.splice(index,1)
        //     }
        //     return [...state]

        // case types.UPDATE_QUALITY:
        //     index = findId (state, product);
        //     if(index !== -1)
        //     {
        //         state[index].quality = quality;
        //     }
        //     return [...state];
        default: return state;
    }
}

// var findId = (card,products) =>{
//     var index = -1;
//     for(var i =0; i < card.length; i++)
//     {
//         if(card[i].product.id === products.id)
//         {
//             index = i;
//             break;
//         }
      
//     }
//     return index;
// }

export default card;

