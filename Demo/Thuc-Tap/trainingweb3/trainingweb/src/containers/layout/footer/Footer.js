import React, { Component } from "react";
import "../../../App.css";
import Images from "../../../assets/images";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="white-bg footer"
        style={{ backgroundColor: "white", margin: "0 -1rem" }}
      >
        <div style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12"
                style={{ marginRight: "0px" }}
              >
                <p
                  className="text-break"
                  style={{ margin: "0px", fontSize: "14px", color: "#171717" }}
                >
                  <b>Trụ sở chính</b>: Công ty TNHH SX TM Phúc Long - ĐKKD: 0302
                  108 546 <br></br> do sở KHĐT TPHCM cấp lần đầu ngày 12/9/2000
                </p>
                <p
                  className="text-break"
                  style={{ margin: "0px", fontSize: "14px", color: "#171717" }}
                >
                  <b>Địa chỉ</b>: 42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường
                  4, quận 8, Hồ Chí Minh
                </p>
                <p
                  className="text-break"
                  style={{ margin: "0px", fontSize: "14px", color: "#171717" }}
                >
                  <b>Điện thoại</b>: 028 6263 0377 - 6263 0378{" "}
                </p>
                <p
                  className="text-break"
                  style={{ margin: "0px", fontSize: "14px", color: "#171717" }}
                >
                  <b>Fax</b>: (028) 6263 0379{" "}
                </p>
                <p
                  className="text-break"
                  style={{ margin: "0px", fontSize: "14px", color: "#171717" }}
                >
                  <b>Email</b> Sales@phuclong.com.vn
                </p>
              </div>
              <div className="col-lg-4 col-sm-6">
                <form className="form-inline">
                  <b>Đăng kí nhận tin khuyến mãi</b>
                  <div className="form-group pt-2">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword2"
                      placeholder="Nhập địa chỉ Email"
                      style={{ borderColor: "#0c713d" }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary ml-2">
                    Gửi
                  </button>
                </form>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div style={{ textAlign: "right" }}>
                  <a>VN </a>|<a> EN</a>
                </div>
                <a>
                  <img
                    src={Images.footer}
                    style={{ height: "62px", width: "165px" }}
                  ></img>
                </a>
                <div className="icon1 nav">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#010101" }}
          >
            <div className="row">
              <div className="col-md-12 text-center">
                <p
                  style={{ color: "#8D8D8D", fontSize: "9.8px", margin: "0px" }}
                >
                  © 2017 Bản quyền Phuc Long Co., Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
