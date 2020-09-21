/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
        <footer style={{ backgroundColor: "rgb(48, 46, 46)", paddingBottom: 30 }}>
  <div className="container">
    <div className="title-footer">
      <p>Xe ô tô SpeedCar</p>
    </div>
    <div className="contact-footer">
      <label>Kết nối cùng SpeedCar</label>
      <div className="icon-social">
        <i className="fab fa-facebook-square" />
        <i className="fab fa-youtube" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter-square" />
      </div>
    </div>
    <div className="List-footer">
      <div className="row">
        <div className="col-md-2">
          <h4 className="title-list-footer">Về SpeedCar</h4>
          <ul className="ul-footer list-unstyled">
            <li>
              <a>Liên hệ</a>
            </li>
            <li>
              <a>Tin tức và sự kiện</a>
            </li>
            <li>
              <a>Cơ hội việc làm</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4 className="title-list-footer">Các công cụ</h4>
          <ul className="ul-footer list-unstyled">
            <li>
              <a>Tìm kiếm đại lý</a>
            </li>
            <li>
              <a>Đặt lái thử</a>
            </li>
            <li>
              <a>Yêu cầu gọi lại</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4 className="title-list-footer">Tư vấn mua xe</h4>
          <ul className="ul-footer list-unstyled">
            <li>
              <a>Các dòng xe</a>
            </li>
            <li>
              <a>Bộ cấu hình</a>
            </li>
            <li>
              <a>Hỗ trợ tài chính</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>    
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
