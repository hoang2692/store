import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./Title";
import Form from "./Form";
import ListItem from "./List";
import "../../../../../App.css";


class Quanly extends Component {

  _onDelete = (data) => {
    this.props.getDatatoDelete(data);
  };


  _onGetData = (id) =>{
    this.props.getDatatEdit(id);
  }

  

  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <Title />
        <div className="row">
          <div
            className="col-md-4"
            style={{
              border: "1px solid white",
              borderRadius: "5px",
              backgroundColor: "white",
              height: "100px",
            }}
          >
            <Form/>
          </div>
          <div className="col-md-8">
            <ListItem _onDelete={this._onDelete} _onGetData={this._onGetData} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stack: state.categories.stack,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
    getDatatoDelete: (id) => dispatch({ type: "CATE_DELETE_REQUEST", id: id }),
    getDatatoUpdate:(cate) => dispatch({type:"CATE_UPDATE_REQUEST",cate:cate}),
    getDatatEdit: (id) => dispatch({type:"CATE_GET_EDIT_REQUEST", id: id})
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Quanly);
