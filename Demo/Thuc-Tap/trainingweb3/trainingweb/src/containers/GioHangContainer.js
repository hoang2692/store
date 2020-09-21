import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';


class GioHangContainer extends Component {
    render() {
        var {sanPhamCart} = this.props;
        return (
                <Cart>
                    {this.showCartItem(sanPhamCart)}
                </Cart>
        );
    }

    showCartItem(sanPhamCart){
        var result = null;
        if(sanPhamCart.length > 0)
        {
            result= sanPhamCart.map((sanpham,index) =>{
                return <CartItem key={index}
                itemCart={sanpham}
                onDelete = {this.props.onDelete}/> 
            })
        }
        return result;
    }

}


const mapStatetoProps = (state) =>{
    return {
        sanPhamCart: state.GioHang
    }
}

const mapDisptachtoProps = (dispatch,props) =>{
    return {
        onDelete: (sanPham) =>{
            dispatch(actions.deleteCart(sanPham))
        }
    }
}


export default connect(mapStatetoProps,mapDisptachtoProps)(GioHangContainer);
