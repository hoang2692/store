import React, { Component } from 'react';

class CartResult extends Component {

    render() {
        // var {card} = this.props;
        return (
            <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>45.000 đ</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light mr-2">Hủy</button>
                <button type="button" className="btn btn-primary waves-effect waves-light">Thanh toán</button>
            </td>
        </tr>
        );
    }

    // showTotal = (card) =>{
    //     var Total = 0;
    //     for(var i = 0; i < card.length; i++)
    //     {
    //         Total += card[i].product.price * card[i].quality;
    //     }
    //     return Total;
    // }

}

export default CartResult;

