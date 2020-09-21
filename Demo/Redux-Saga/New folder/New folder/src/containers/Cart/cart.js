import React, { Component } from 'react';
import CartItem from './cartItem';
import CartResult from './cartresult';
import {connect} from 'react-redux';

class Cart extends Component {

    render() {
        const {cart} = this.props;
        return (
            <section className="section" style={{paddingBottom: '50px', paddingTop: '50px'}}>
             <div class="container">
                <div className="">
                    <table className="table product-table" style={{borderRadius: "5px solid white", backgroundColor: 'white', borderRadius: '5px'}}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th style={{paddingLeft: '20px'}}>Giá</th>
                                <th style={{paddingLeft: '20px'}}>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((e,index) =>{
                            return <CartItem key={index} cart={e}/>
                        })}
                         <CartResult />
                        </tbody>
                    </table>
                </div>              
             </div>
            </section>
        );
    }
}

const mapStatetoProps = (state) =>{
    return {
        cart: state.cart
    } 
}

const mapDispatchtoProps = (dispatch,props) =>{
    return{

    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Cart);

