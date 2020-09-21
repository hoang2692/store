import React, { Component } from "react";
import "../App.css";

class ThucUongSanPham extends Component {
  render() {
    var { Sanpham } = this.props;
    return (
      <div className="col-lg-3 col-sm-6 align-just-center align-items-center">
        <div className="card align-items-center align-text-center pt-3">
          <span
            style={{
              color: "white",
              backgroundColor: "#0C713D",
              fontSize: "12px",
              right: "10px",
              position: "absolute",
              padding: "5px 6px",
              fontWeight: 900,
              borderRadius: "3px",
            }}
          >
            Món mới
          </span>
          <img className="card-img-top" src={Sanpham.sp.img} alt="hong tra" />
          <div className="card-body">
            <h6 className="card-title">{Sanpham.sp.name}</h6>
            <p className="card-text">{Sanpham.sp.thongTin}</p>
            <h5 className="card-title" style={{ color: "#0C713D" }}>
              {Sanpham.sp.gia}đ
            </h5>
            <a
              className="btn btn-primary"
              onClick={() => this.onAddCart(Sanpham.sp, Sanpham.soLuong)}
            >
              Đặt hàng
            </a>
          </div>
        </div>
      </div>
    );
  }

  onAddCart = (Sanpham, soluong) => {
    this.props.onAddCart(Sanpham, soluong);
  };
}

export default ThucUongSanPham;
