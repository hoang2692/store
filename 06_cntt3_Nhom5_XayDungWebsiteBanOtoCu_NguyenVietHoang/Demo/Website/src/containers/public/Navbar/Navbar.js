/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="container">
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "black" }}
          >
            <a className="navbar-brand" href="#">
              <i style={{ fontSize: 30, color: "white" }} className="fas fa-car" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item navItem">
                  <a className="nav-link" href="#">
                    Các dòng xe
                  </a>
                </li>
                <li className="nav-item navItem">
                  <a className="nav-link" href="#">
                    Tìm và mua xe
                  </a>
                </li>
                <li className="nav-item navItem">
                  <a className="nav-link" href="#">
                    Dịch vụ
                  </a>
                </li>
                <li className="nav-item navItem">
                  <a className="nav-link" href="#">
                    Phụ tùng và phụ kiện
                  </a>
                </li>
                <li className="nav-item navItem">
                  <a className="nav-link" href="#">
                    Về chúng tôi
                  </a>
                </li>
              </ul>
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

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
