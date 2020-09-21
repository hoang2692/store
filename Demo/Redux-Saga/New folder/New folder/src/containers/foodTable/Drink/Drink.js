/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import "../../../App.css";
import img from "../assets/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DessertCake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtselect: 0,
    };
  }

  onAddCard = (product) =>{
    this.props.addCard(product);
}

  onChange() {}
  render() {
    const { data,categories } = this.props;
    return (
      <div>
        <img style={{ width: "100%" }} src={img.Drink_1} alt="cà phê"></img>
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
                  <img src={img.La} alt="icon_latra" />
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row" style={{ justifyContent: "center" }}>
              <ul
                className="nav nav-pills mb-3 align-just-center"
                id="pills-tab"
                role="tablist"
              >
              {!!categories &&
                categories.map((cate, index) => {
                  return (
                    <li className="nav-item">
                    <Link 
                    style={{ width: "300px", textAlign: "center", border: '1px solid green', borderRadius: '5px' }}
                    className="nav-link"
                    id="pills-home-tab"
                    to="/foodTable/1"
                    role="tab"
                    aria-controls="pills-home"
                    key={index} 
                    to={`/foodTable/${cate.id}`}>
                      {cate.name}
                    </Link></li>
                  );
                })}
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
                          className="custom-select"
                          value={this.state.txtselect}
                          name="txtselect"
                          onChange={this.onChange}
                        >
                          <option disabled value={0}>
                            Không lựa chọn
                          </option>
                          <option value={1}>Từ thấp đến cao</option>
                          <option value={2}>Từ cao đến thấp</option>
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
                            <Link to="#" className="btn ">
                              Đặt hàng
                            </Link>
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
                          <Link to="#" to="#" className="btn btn-primary">
                            Đặt hàng
                          </Link>
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
                          <Link to="#" className="btn btn-primary">
                            Đặt hàng
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    {data.map((e, index) => {
                      return (
                        <div
                          className="col-lg-3 col-sm-6 align-just-center align-items-center"
                          key={index}
                        >
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
                            {e.img == null ? (
                              <img
                                className="card-img-top"
                                src={img.Drink_4}
                                alt="phuc bon tu"
                              />
                            ) : (
                              e.img
                            )}

                            <div className="card-body">
                              <h6 className="card-title">{e.name}</h6>
                              <p className="card-text">{e.content}</p>
                              <h5
                                className="card-title"
                                style={{ color: "#0C713D" }}
                              >
                                {e.price}
                              </h5>
                              <Link to="#" className="btn btn-primary"  onClick= {() => this.onAddCard(e)}>
                                Đặt hàng
                              </Link>
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
    var { match } = this.props;
    var id = match.params.id;
    this.props.getData(id);
  }

  componentDidUpdate(preProps) {
    var { match } = this.props;
    var id = match.params.id;
    if (preProps.match.params.id !== id) {
      this.props.getData(id);
    }
  }
}

const mapStateToProps = (state) => {
  
  return {
    data: state.products.data,
    categories: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => dispatch({ type: "PRODUCT_GET_REQUEST", id: id }),
    addCard: (product) => dispatch ({ type: "ADD_PRODUCT_CART", product: product, soluong: 1})
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DessertCake)
);
