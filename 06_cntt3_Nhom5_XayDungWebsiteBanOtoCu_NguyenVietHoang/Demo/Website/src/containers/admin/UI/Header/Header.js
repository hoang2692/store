/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  onLogOut = () =>{
    this.props.logOut();
  }
  render() {
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
                  className="logOut"
                  onClick = {this.onLogOut}
                >
                  Sign Out
                  <i className="ml-1 fas fa-sign-out-alt"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>      
    );
  }
}
   

const mapStateToProps = (state) => {
  return {
 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch({type: "LOGOUT_ADMIN_SUCCESS"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
