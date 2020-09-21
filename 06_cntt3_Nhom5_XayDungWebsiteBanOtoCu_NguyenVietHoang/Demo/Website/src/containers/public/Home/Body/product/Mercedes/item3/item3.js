import React, { Component } from "react";
import { connect } from "react-redux";
import images from "../../assets/index";

class Item3 extends Component {
  render() {
    const {products} = this.props.products ? this.props : {};
    console.log(products)
    return (
      <div className="row">
      {products.map((e, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="card card-product">
              <div className="card-body card-product-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">{e.price} VNĐ</p>
              </div>
              <img
                className="card-img-top"
                src={images.MER}
                alt="Card image cap"
              />
              <div className="info-cart-product">
                <div className="info">
                  <span>
                    <i className="fas fa-clipboard-list mr-2" />
                    Tìm hểu thêm
                  </span>
                </div>
                <div className="add-cart">
                  <span data-toggle="modal" data-target="#loginModal">
                    Đặt hàng
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    );
  }
  componentDidMount(){
    this.props.getData();
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.CopeeMer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () =>dispatch({type: "GET_MER_COPEE_REQUEST"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item3);
