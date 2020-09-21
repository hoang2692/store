import React, { Component } from "react";
import "../../../App.css";
class DessertCake extends Component {
  render() {
    return (
      <div>
        <img
          style={{ width: "100%" }}
          src="../../img/hinhdau.jpg"
          alt="cà phê"></img>
        <div
          className="container-fluid pt-1"
          style={{ backgroundColor: "#white" }}>
          <div className="row align-text-center">
            <div className="col-md-12">
              <div className="page-heading">
                <div className="row justify-content-center">
                  <center>
                    <div className="dieuhuong">
                      <span>
                        <a href="true">Trang chủ</a>&nbsp;/&nbsp;
                        <a href="true" className="active">
                          Thức uống
                        </a>
                      </span>
                    </div>
                  </center>
                </div>
                <h1>THỨC UỐNG</h1>
                <div>
                  <img src="../../img/latra.png" alt="icon_latra" />
                </div>
              </div>
            </div>
          </div>
          <div class="container ">
            <div className="row" style={{ justifyContent: "center" }}>
              <ul
                className="nav nav-pills mb-3 align-just-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link active"
                    id="pills-home-tab"
                    href="/sanpham/thucuong"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    THỨC UỐNG
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link"
                    id="pills-profile-tab"
                    href="/sanpham/monman"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    DINNING OFFER
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link"
                    id="pills-contact-tab"
                    href="/sanpham/bakery"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    BAKERY
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row align-items-center">
                    <div
                      className="col-md-4"
                      style={{ border: "0.5px solid #cccccc" }}
                    >
                      <div
                        className="form-group form-inline"
                        style={{ marginTop: "15px" }}
                      >
                        <label
                          className="col-sm-4"
                          style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: 600,
                          }}
                        >
                          Sản phẩm
                        </label>
                        <select
                          id="inputState"
                          className="form-control col-sm-8"
                        >
                          <option>Chọn nhóm</option>
                          <option>Classical Coffee</option>
                          <option>Vietnamese Traditional Choice</option>
                          <option>Cool blended beverage</option>
                          <option>Creamy</option>
                          <option>Special Tea</option>
                          <option>Hot unique loose tea</option>
                          <option>Relaxing fruit smoothie</option>
                          <option>Fresh Squeezed fruit juice</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ border: "0.5px solid #cccccc" }}
                    >
                      <div
                        className="form-group form-inline"
                        style={{ marginTop: "15px" }}
                      >
                        <label
                          for="inputState"
                          className="col-sm-4"
                          style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: 600,
                          }}
                        >
                          Theo giá
                        </label>
                        <select
                          id="inputState"
                          className="form-control col-sm-8"
                        >
                          <option selected>Không lựa chọn</option>
                          <option>Từ thấp đến cao</option>
                          <option>Từ cao đến thấp</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ border: "0.5px solid #cccccc" }}
                    >
                      <div
                        className="form-group form-inline"
                        style={{ marginTop: "15px" }}
                      >
                        <label
                          for="inputState"
                          className="col-sm-4"
                          style={{
                            fontSize: "16px",
                            color: "black",
                            fontWeight: 600,
                          }}
                        >
                          Search
                        </label>
                        <div className="input-group col-sm-8">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search this blog"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center  align-just-center align-items-center  pt-5">
                    <div className="col-lg-6 background">
                      <div className="row pt-3 pb-3">
                        <div className="col-sm-6">
                          <div className="card-info card-background">
                            <h6
                              className="card-title"
                              style={{
                                color: "#0C713D",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            >
                              Cà Phê Phúc Bồn Tử Hạnh Nhân Đá Xay
                            </h6>
                            <p className="card-text">
                              Espresso Raspberry Almond
                            </p>
                            <h5
                              className="card-title"
                              style={{ color: "#0C713D" }}
                            >
                              65.000 đ
                            </h5>
                            <a className="btn ">Đặt hàng</a>
                          </div>
                        </div>
                        <div
                          className="col-sm-6"
                          style={{ textAlign: "right" }}
                        >
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
                          <img
                            className="img-banner"
                            src="../../img/phucbontu_hanhnhan.png"
                            alt="phuc bon tu"
                          />
                        </div>
                      </div>
                    </div>

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
                        <img
                          className="card-img-top"
                          src="../../img/phucbontu_hanhnhan.png"
                          alt="phuc bon tu"
                        />
                        <div className="card-body">
                          <h6 className="card-title">
                            Cà Phê Phúc Bồn Tử Hạnh Nhân
                          </h6>
                          <p className="card-text">Latte Raspberry Almond</p>
                          <h5
                            className="card-title"
                            style={{ color: "#0C713D" }}
                          >
                            50.000 đ
                          </h5>
                          <a className="btn btn-primary">Đặt hàng</a>
                        </div>
                      </div>
                    </div>

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
                        <img
                          className="card-img-top"
                          src="../../img/hongtra_cam.png"
                          alt="hong tra"
                        />
                        <div className="card-body">
                          <h6 className="card-title">Hồng Trà Đác Cam</h6>
                          <p className="card-text">Forest Black Tea</p>
                          <h5
                            className="card-title"
                            style={{ color: "#0C713D" }}
                          >
                            65.000 đ
                          </h5>
                          <a href="#" className="btn btn-primary">
                            Đặt hàng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    {this.props.children}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default DessertCake;
