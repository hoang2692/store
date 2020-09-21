/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class QuanlysanphamADD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtname: "",
      txtprice: "",
      txtcontant: "",
      txtselect:"Categories",
      txtpriceErro: '',
    };
  }

  validate = () =>{
    let priceErro= "";
    if(this.state.txtprice < 0)
    {
      priceErro= "Giá nhập không hợp lệ"
    }

    if(priceErro){
      this.setState({txtpriceErro: priceErro})
      return false;
    }

    return true;
  }

  _onChangeText = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  _onCreate = (e) => {
    e.preventDefault()
    let validate = this.validate();
    if(validate)
    {
    var data = {
      id: this.state.id,
      name: this.state.txtname,
      price:this.state.txtprice,
      content:this.state.txtcontant,
      user_id: 1,
      category_id:this.state.txtselect
    }
    if(this.state.id)
    {
      this.props.upDateProduct(data)
    }else{
      this.props.getDatatoSubmit(data);
    }
    this.props.history.goBack();
    }
    }


  
  render() {
    const {dataCate, dataEdit} = this.props;
    console.log(dataEdit)
    return (
      <div
        className="row"
        style={{ justifyContent: "center", paddingTop: "50px" }}
      >
        <div className="col-md-9">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              paddingBottom: "20px",
              fontWeight: "bold",
            }}
          >
            FORM ADD AND EDIT
          </h3>
          <form onSubmit={this._onCreate}>
            <label className="my-1 mr-2">Chọn Category</label>
            <select
            className="form-control"
            value={this.state.txtselect}
            name="txtselect"
            onChange={this. _onChangeText}>
            <option>Categories</option>
            {dataCate.map((e,index) =>{
              return <option key={index} value={e.id}>{e.name}</option>
            })}
        </select>
            <div className="form-row mt-3">
              <div className="col-md-4 mb-3">
                <label>Name</label>
                <input
                  name="txtname"
                  value={this.state.txtname}
                  onChange={this._onChangeText}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label>Price</label>
                <input
                  name="txtprice"
                  className="form-control"
                  value={this.state.txtprice}
                  onChange={this._onChangeText}
                  type="text"
                  placeholder="Price"
                  required
                />
                {this.state.txtpriceErro ? <div style={{color:'red', fontWeight: 600}}>
                  {this.state.txtpriceErro} 
              </div> : null}
              </div>
              <div className="col-md-4 mb-3">
                <label>Contant</label>
                <input
                  name="txtcontant"
                  className="form-control"
                  value={this.state.txtcontant}
                  onChange={this._onChangeText}
                  type="text"
                  placeholder="Contant"
                  required
                />
              </div>
            </div>
            <button
              className="btn"
              style={{ background: "green", color: "white" }}
              type="submit"
              
            >
              Thêm
            </button>
            <Link
              to="/admin/quanlysanpham"
              className="btn ml-3 btn-danger"
              style={{ color: "white" }}
              type="submit"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );

  }
  componentDidMount(){
    var {match} = this.props;
    var id= match.params.id;
    if(match)
    {
      this.props.getEditData(id);
    }
    this.props.getData();

  }

  UNSAFE_componentWillReceiveProps(nextprops){
    if(nextprops && nextprops.dataEdit)
    {
      var {dataEdit} = nextprops;
      this.setState({
        id: dataEdit.id,
        txtname: dataEdit.name,
        txtprice: dataEdit.price,
        txtcontant: dataEdit.content,
        txtselect: dataEdit.category_id

      })
    }
  }
}


const mapStateToProps = (state) => {
  return {
    dataCate: state.categories.data,  
    dataEdit: state.cateEdit.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDatatoSubmit: (cate) => dispatch({ type: "PRODUCT_SUBMIT_REQUEST", cate: cate }),
    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),  
    getEditData: (id) => dispatch({ type: "PRODUCT_GET_EDIT_DATA_REQUEST", id:id}),
    upDateProduct: (data) => dispatch({type: "PRODUCT_UPDATE_EDIT_DATA_REQUEST", data: data})
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanlysanphamADD);

