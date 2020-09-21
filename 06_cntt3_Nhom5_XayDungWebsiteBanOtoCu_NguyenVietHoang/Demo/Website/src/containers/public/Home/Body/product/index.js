import React, { Component } from "react";
import { connect } from "react-redux";
import LoginModal from "../../../Modal/login";
import Lamborghini from './Lamborghini/index';
import Mer from './Mercedes/index';
import Toyota from './Toyota/index';

class products extends Component {
  render() {
    return (
      <div>
        <LoginModal />

        <div className="container" style={{ marginTop: 50, paddingBottom: 50 }}>
          {/* Header Products */}
          <h1 style={{ fontFamily: '"PT Serif", serif', marginBottom: 50 }}>
            Các dòng xe có tại cửa hàng
          </h1>
          {/* List */}
          <ul
            className="nav nav-pills"
            id="pills-tab"
            role="tablist"
            style={{ marginBottom: 30 }}
          >
            <li className="nav-item">
              <a
                className="navList nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                TOYOTA
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navList nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Mercedes-Benz
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navList nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Lamborghini
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
              <Toyota />
            </div>
            <div
              className="tab-pane fade show"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Mer />
            </div>
            <div
              className="tab-pane fade show"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <Lamborghini />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(products);
