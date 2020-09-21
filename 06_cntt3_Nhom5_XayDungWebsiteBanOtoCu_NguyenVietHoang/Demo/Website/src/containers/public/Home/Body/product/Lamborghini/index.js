import React, { Component } from "react";
import { connect } from "react-redux";
import Item1 from './Item1/item1';
import Item2 from './item2/item2';
import Item3 from './item3/item3';

class Lamborghini extends Component {
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
              id="v-pills-Aventador-tab"
              data-toggle="pill"
              href="#v-pills-Aventador"
              role="tab"
              aria-controls="v-pills-Aventador"
              aria-selected="true"
            >
              Aventador
            </a>
            <a
              className="navListTotal nav-link"
              id="v-pills-SUVLAMBOR-tab"
              data-toggle="pill"
              href="#v-pills-SUVLAMBOR"
              role="tab"
              aria-controls="v-pills-SUVLAMBOR"
              aria-selected="false"
            >
              SUV
            </a>
            <a
              className="navListTotal nav-link"
              id="v-pills-Harucan-tab"
              data-toggle="pill"
              href="#v-pills-Harucan"
              role="tab"
              aria-controls="v-pills-Harucan"
              aria-selected="false"
            >
              Harucan
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-Aventador"
              role="tabpanel"
              aria-labelledby="v-pills-Aventador-tab"
            >
              <Item1 />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-SUVLAMBOR"
              role="tabpanel"
              aria-labelledby="v-pills-SUVLAMBOR-tab"
            >
              <Item2 />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-Harucan"
              role="tabpanel"
              aria-labelledby="v-pills-Harucan-tab"
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
export default connect(mapStateToProps, mapDispatchToProps)(Lamborghini);
