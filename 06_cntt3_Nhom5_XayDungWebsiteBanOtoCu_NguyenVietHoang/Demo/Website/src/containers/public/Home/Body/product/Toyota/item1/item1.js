import React, { Component } from "react";
import { connect } from "react-redux";
import images from "../../../product/assets/index";

class Item1 extends Component {

  componentDidMount(){
    this.props.getData();
  }

  onAddCart = (item) =>{
    this.props.onAddCart(item);
    console.log("item",item)
  }

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
                src={images.TOYOTA}
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
                  <span data-toggle="modal" data-target="#loginModal" onClick={() => this.onAddCart(e)}>
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
}

const mapStateToProps = (state) => {
  return {
    products: state.sadanToyotas.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () =>dispatch({type: "GET_TOYOTA_SADAN_REQUEST"}),
    onAddCart: (item) =>dispatch({type: "ADD_CART_SUCCESS", item})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item1);
