/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const {cart} = this.props;
    console.log("total",cart)
    return (
        <div
        className="container-fluid"
        style={{
          backgroundColor: "black",
          borderBottom: "1px solid rgb(90, 86, 86)"
        }}
      >
        <div className="container">
          <nav className="navbar navbar-light" style={{ backgroundColor: "black" }}>
            <div>
              <Link
                to="/"
                className="navbar-brand"
                style={{
                  border: "4px solid white",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  textAlign: "center"
                }}
              >
                <i style={{ color: "white" }} className="fas fa-car" />
              </Link>
              <a style={{ color: "white", fontWeight: 900 }}> SpeedCar</a>
            </div>
            <div>
              <div className="form-inline my-2 my-lg-0 navbar-cart">
                <a
                  style={{
                    marginRight: 10,
                    color: "white",
                    float: "left",
                    border: "2px solid white",
                    borderRadius: 5,
                    padding: 3
                  }}
                >
                  The best or nothing
                </a>
                <div className="nav-cart">
                  <Link to="/cart" style={{textDecoration: 'none'}}>
                    <i className="fas fa-cart-plus navCartItem" /> Cart
                    <span className="numberCart ml-1">{this.totalcart(cart)}</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>      
    );
  }
  totalcart = (cart) =>{
    var total = '';
      if(cart)
      {
        if(cart.length <= 0)
        {
          total = 0;
        }
        else
        {
          total = 1;
        }
      }
      else
      {
        total = 0;
      }
    return total}
}
   

const mapStateToProps = (state) => {
  return {
    cart: state.Cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
