import React, { Component } from "react";
import { connect } from "react-redux";
import SlideShow from './slideShow/slideShow';
import Products from './Body/product/index';
import Information from './Body/infomation/infomation';

class HomePage extends Component {

  render() {
    return (
        <div>
            <SlideShow />
            <Products />
            <Information />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
