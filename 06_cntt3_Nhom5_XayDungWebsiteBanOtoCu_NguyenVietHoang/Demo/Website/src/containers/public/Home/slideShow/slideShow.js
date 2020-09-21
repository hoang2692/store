import React, { Component } from "react";
import { connect } from "react-redux";
import images from './assets/index'

class SlideShow extends Component {

  render() {
    return (
        <div className="container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ width: 1280, height: 600 }}
                className="d-block w-100"
                src={images.slide_1}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ width: 1280, height: 600 }}
                className="d-block w-100"
                src={images.slide_2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ width: 1280, height: 600 }}
                className="d-block w-100"
                src={images.slide_3}
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ width: 1280, height: 600 }}
                className="d-block w-100"
                src={images.slide_4}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
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
export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);
