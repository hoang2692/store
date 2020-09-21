import React, { Component } from "react";
import { connect } from "react-redux";
import images from './assets/index';

class Information extends Component {

  render() {
    return (
        <div
        className="container-fluid"
        style={{ backgroundColor: "black", paddingTop: 30, paddingBottom: 40 }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: '"PT Serif", serif',
              marginBottom: 50,
              color: "white"
            }}
          >
            Thông tin về chúng tôi
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ border: "none" }}>
                <div className=" img-hover">
                  <img
                    className="card-img-top"
                    src={images.info_1}
                    alt="Card image cap"
                  />
                  <div className="middle">
                    <div className="text">
                      <i className="fas fa-chevron-right mr-2" />
                      Thêm thông tin
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-info">
                  <h5 className="card-title title-info">Xe đã qua sử dụng</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-hover" style={{ border: "none" }}>
                <div className=" img-hover">
                  <img
                    className="card-img-top"
                    src={images.info_2}
                    alt="Card image cap"
                  />
                  <div className="middle">
                    <div className="text">
                      <i className="fas fa-chevron-right mr-2" />
                      Thêm thông tin
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-info">
                  <h5 className="card-title title-info">
                    Khách hàng và doanh nghiệp
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card img-hover" style={{ border: "none" }}>
                <div className=" img-hover">
                  <img
                    className="card-img-top"
                    src={images.info_3}
                    alt="Card image cap"
                  />
                  <div className="middle">
                    <div className="text">
                      <i className="fas fa-chevron-right mr-2" />
                      Thêm thông tin
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-info">
                  <h5 className="card-title title-info">Tin tức và sự kiện</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 50 }}>
            <div className="col-md-3">
              <div className="card card-list">
                <div className="card-body body-list">
                  Tìm đại lí gần nhất
                  <i style={{ float: "right" }} className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-list">
                <div className="card-body body-list">
                  Đăng kí chạy thử
                  <i style={{ float: "right" }} className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-list">
                <div className="card-body body-list">
                  Yêu cầu gọi lại
                  <i style={{ float: "right" }} className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-list">
                <div className="card-body body-list">
                  Xem ưu đãi hiện có
                  <i style={{ float: "right" }} className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>       
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Information);
