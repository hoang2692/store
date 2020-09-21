import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navmenu extends Component {
  clicKed = () => {
    var x = document.getElementById("navba");
    if (x.className === "topnav") {
      x.className = "topnav responsive";
    } else {
      x.className = "topnav";
    }
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { categories } = this.props;

    return (
      <div style={{ position: "sticky", top: "0", zIndex: "3" }}>
        <div className="topnav" alt="menubar" id="navba">
          <Link to="/">Trang chủ</Link>

          <div className="dropdwn">
            <button className="dropbtn">Sản phẩm</button>
            <div className="dropdwn-content">
              {!!categories &&
                categories.map((cate, index) => {
                  return (
                    <Link key={index} to={`/foodTable/${cate.id}`}>
                      {cate.name}
                    </Link>
                  );
                })}
            </div>
          </div>

          <Link to="/cart/bill">Giỏ hàng</Link>
          <div className="dropdwn">
            <Link to="/danhnhap/login">Đăng nhập</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navmenu);
