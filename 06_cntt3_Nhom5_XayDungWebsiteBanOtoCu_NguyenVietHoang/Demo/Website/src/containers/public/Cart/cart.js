/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

class Cart extends Component {
  notifyfaile = () => toast.info(
    "Đặt hàng thành công",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  onClick = () =>{
    this.notifyfaile();
    this.props.deleteCart();
  }
  render() {
    function formatPrice(n, currency, fix = 1) {
      if (!currency) currency = "";
      if (!n || n === 0) return 0 + ` ${currency}`;
      return (
        n.toFixed(fix).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + " " + currency
      );
    }

    const {data} = this.props;
    console.log("data",data)

    return (
    <div className="container-fluid" style={{ backgroundColor: "#F0F0F0" }}>
    {data ? <div
      className="container"
      style={{ backgroundColor: "#F0F0F0", padding: "40px 0" }}
    >
      <div className="row cart-header mb-2" style={{justifyContent: 'center'}}>
        <div className="col-md-6">
          <div className="mt-2">
            <span className="left"><i className="fas fa-chevron-left mr-1"></i>Mua sản phẩm khác</span>
            <span className="right">Giỏ hàng của bạn</span>
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div
          className="col-md-6"
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        >
          <div
            className="row"
            style={{ borderBottom: "1px solid #d8d8d8" }}
          >
            <div className="col-sm-6 colimg">
              <img
                style={{ width: "200px", height: "120px" }}
                src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0EFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm90hk9Q6FjcBXwOuXGEuGXJ0l34xOB2NQcbApjkCI5uVmMQC3qX1kzNRJ9m7jxhfhKV1HV%25vq9tTyLRDcXYaxWXwrH1dHrn8wfT2oiZEkpM4FlmjTg92bO6PD8PDSeWiKItsd4HQcUfgONXGEPbdJ0leorOB2sW2bApUt9I5uGQYQC3aM1kzNHTnm7j86vhKViKw%25vq46qyLRhL6Yax%250qrH1yM%25n8w0hyoiZKbEM4Fv4lTg9Lt26PDa1sSeWHnItsd8oGcUfiM1XGE4JmJ0lgCJOB2fBObApEACI5uKo2QC3vSTkzNL6Sm%25kbFDZittsdB%25ycJtj9GXOcAymJ0l44hOB2HB%25bAp4TZI5uB5DQC3AgTkzN5Unm7jCyfhKVzYt%25vqEtTyLRl3HYax2jurH18JOn8wiAyoiZ45pM4FgCPTg735wrcldu63eZAm9F9Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&pov=BE090&crop=230,250,1675,830&im=Crop,rect=(230,250,1445,580);Resize,width=500"
              />
            </div>
            <div className="col-sm-5 colinfo mt-3 ml-2">
              <div className="nameCart">
                <a>{data.name}</a>
              </div>
              <div className="priceCart mt-3">
                <span>
                  Giá: <strong>{formatPrice(parseInt(data.price))} VNĐ</strong>
                </span>
              </div>
            </div>
          </div>
          <div
            className="row total"
            style={{ borderBottom: "1px solid #d8d8d8" }}
          >
            <div>
              <div>
                <span className="left">Tổng:</span>
                <span className="right">{formatPrice(parseInt(data.price))} VNĐ</span>
              </div>
              <div className="mt-2">
                <span className="leftThanhToan">Cần Thanh Toán:</span>
                <span className="right">{formatPrice(parseInt(data.price))} VNĐ</span>
              </div>
            </div>
          </div>
          <form
            className="needs-validation"
            noValidate
            style={{ padding: "10px 30px 10px" }}
          >
            <div className="form-row mt-2" style={{ marginLeft: "2px" }}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                />
                <label className="form-check-label">
                  Anh
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                />
                <label className="form-check-label">
                  Chị
                </label>
              </div>
            </div>
            <div className="form-row mt-2">
              <div className="col mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Họ và Tên"
                  required
                />
              </div>
              <div className="col mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Số Điện Thoại"
                  required
                />
              </div>
            </div>
            <div className="form-row mt-2">
              <div className="col mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="Yêu cầu khác ( Không bắt buộc )"
                  required
                />
              </div>
            </div>
            <div className="form-row mt-2">
              <div className="col mb-3">
                <label>Thời gian nhận hàng:</label>
                <input
                  type="date"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="Yêu cầu khác ( Không bắt buộc )"
                  required
                />
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <Link to="/" className="btn btn-Cart" type="submit" onClick={this.onClick}>
                Đặt Hàng
              </Link>
              <span className="mt-1" style={{ fontSize: "14px" }}>
                Cửa Hàng sẽ liên lạc ngay sau khi quý khách đặt hàng.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div> : <h1 style={{textAlign: 'center', margin: '10px'}}>Chưa có sản phẩm nào</h1>}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: () =>dispatch({type: "ADD_CART_REQUEST"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
