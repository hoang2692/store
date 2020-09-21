import React, { Component } from "react";
import { connect } from "react-redux";
import Item1 from "./item1/item1";
import Item2 from "./item2/item2";
import Item3 from "./item3/item3";

class Mer extends Component {
  render() {
    return (
      <div className="row row-product" style={{ position: "relative" }}>
        <div className="col-md-3 menuList">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="navListTotal nav-link active"
              id="v-pills-Sadan-tab"
              data-toggle="pill"
              href="#v-pills-Sadan"
              role="tab"
              aria-controls="v-pills-Sadan"
              aria-selected="true"
            >
              Saloons
            </a>
            <a
              className="navListTotal nav-link"
              id="v-pills-SUV-tab"
              data-toggle="pill"
              href="#v-pills-SUV"
              role="tab"
              aria-controls="v-pills-SUV"
              aria-selected="false"
            >
              SUV
            </a>
            <a
              className="navListTotal nav-link"
              id="v-pills-Coupe-tab"
              data-toggle="pill"
              href="#v-pills-Coupe"
              role="tab"
              aria-controls="v-pills-Coupe"
              aria-selected="false"
            >
              Coupe
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-Sadan"
              role="tabpanel"
              aria-labelledby="v-pills-Sadan-tab"
            >
              <Item1 />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-SUV"
              role="tabpanel"
              aria-labelledby="v-pills-SUV-tab"
            >
              <Item2 />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-Coupe"
              role="tabpanel"
              aria-labelledby="v-pills-c-tab"
            >
              <Item3 />
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
export default connect(mapStateToProps, mapDispatchToProps)(Mer);
