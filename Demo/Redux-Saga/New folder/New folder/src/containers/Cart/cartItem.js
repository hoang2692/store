/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import img from "../foodTable/assets/index";

class CartItem extends Component {

    render() {
        // var {item} = this.props;
        // var {quality} = item
        return (
            <tr>
                <th scope="row">
                    <img src={img.Drink_3} alt="" className="img-fluid z-depth-0" style={{width: '100px', height: '100px'}}/>
                </th>
                <td style={{verticalAlign: 'middle'}}>
                    <h5>
                        <strong>Trà sữa</strong>
                    </h5>
                </td>
                <td style={{verticalAlign: 'middle'}}>45.000 đ</td>
                <td className="center-on-small-only" style={{verticalAlign: 'middle'}}>
                    
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                                        >
                            <a style={{cursor: 'pointer'}}>—</a>
                        </label>
                        <span className="qty" style={{ textAlign: 'center',width: '30px', height: '28px', backgroundColor: 'white'}}>1</span>
                        <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                                       >
                            <a style={{cursor: 'pointer'}}>+</a>
                        </label>
                    </div>
                </td>
                <td style={{verticalAlign: 'middle'}}>45.000 đ</td>
                <td style={{verticalAlign: 'middle'}}>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                                </button>
                </td>
                
            </tr>
           
        );
    }

    // changQuality= (product,quality) =>{
    //     this.props.onUpdateQuality(product,quality)
    //     this.props.onChangMess(messengers.MEG_UPDATE)
    // }

    // onDelete = (product) =>{
    //     this.props.onDeleteCard(product)
    //     this.props.onChangMess(messengers.MEG_DELETE)
    // }

    // total = (price,sl) => {
    //     return price*sl;
    // }
}

export default CartItem;

