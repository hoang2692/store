import React, { Component } from "react";
import { connect } from "react-redux";
import images from "../../../product/assets/index";

class Item2 extends Component {
  render() {
    const {products} = this.props;
    console.log("Aventador",products)
    return (
        <div className="row">
                {products.map((e,index) =>{
                  return (
                    <div className="col-md-4" key={index}>
                  <div className="card card-product">
                    <div className="card-body card-product-body">
                      <h5 className="card-title">{e.name}</h5>
                      <p className="card-text">{e.price}</p>
                    </div>
                    <img
                      className="card-img-top"
                      src={images.LAMBOR}
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
                        <span>Đặt hàng</span>
                      </div>
                    </div>
                  </div>
                </div>
                  )
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
    products: state.SUVLambor.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () =>dispatch({type: "GET_LAMBOR_SUV_REQUEST"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item2);
