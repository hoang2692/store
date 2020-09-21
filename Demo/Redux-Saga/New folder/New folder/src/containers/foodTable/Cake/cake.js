import React, { Component } from "react";
import "../../../App.css";
import img from "../assets/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Cake extends Component {
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <div>
        <img style={{ width: "100%" }} src={img.Cake_1} alt="cà phê"></img>
        <div
          className="container-fluid pt-1"
          style={{ backgroundColor: "white" }}
        >
          <div className="row align-text-center">
            <div className="col-md-12">
              <div className="page-heading">
                <div className="row justify-content-center">
                  <center>
                    <div className="dieuhuong">
                      <span>
                        <Link to="/">Trang chủ</Link>&nbsp;/&nbsp;
                        <Link className="active">BAKERY</Link>
                      </span>
                    </div>
                  </center>
                </div>
                <h1>BAKERY</h1>
                <div>
                  <img src={img.La} alt="icon_latra" />
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
                  <Link
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link "
                    id="pills-home-tab"
                    to="/foodTable/id"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    THỨC UỐNG
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link"
                    id="pills-profile-tab"
                    to="/foodTable/id"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    DINNING OFFER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ width: "200px", textAlign: "center" }}
                    className="nav-link active"
                    id="pills-contact-tab"
                    to="/foodTable/id"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    BAKERY
                  </Link>
                </li>
              </ul>
              <div className="tab" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row align-items-center">
                    <div
                      className="col-md-6"
                      style={{ border: "0.5px solid #cccccc" }}
                    >
                      <div
                        className="form-group form-inline"
                        style={{ marginTop: "15px" }}
                      >
                        <label
                          htmlFor="inputState"
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
                      className="col-md-6"
                      style={{ border: "0.5px solid #cccccc" }}
                    >
                      <div
                        className="form-group form-inline"
                        style={{ marginTop: "15px" }}
                      >
                        <label
                          htmlFor="inputState"
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
                            <Link className="btn ">Đặt hàng</Link>
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
                            src={img.Drink_2}
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
                          src={img.Drink_3}
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
                          <Link className="btn btn-primary">Đặt hàng</Link>
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
                          src={img.Drink_4}
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
                          <Link className="btn btn-primary">Đặt hàng</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    {data.map((e, index) => {
                      return (
                        <div key={index} className="col-lg-3 col-sm-6 align-just-center align-items-center">
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
                              src={img.Drink_3}
                              alt="phuc bon tu"
                            />
                            <div className="card-body">
                              <h6 className="card-title">
                                Cà Phê Phúc Bồn Tử Hạnh Nhân
                              </h6>
                              <p className="card-text">
                                Latte Raspberry Almond
                              </p>
                              <h5
                                className="card-title"
                                style={{ color: "#0C713D" }}
                              >
                                50.000 đ
                              </h5>
                              <Link to="#" className="btn btn-primary">Đặt hàng</Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
  componentDidMount() {
    this.props.getData();
    const id = 53;
    this.props.getData(id);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.products.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => dispatch({ type: "PRODUCT_GET_REQUEST" ,id:id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cake);
