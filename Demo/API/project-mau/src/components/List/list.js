import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class List extends Component {

  constructor(props){
    super(props);
      this.state={
        txtselect: ''
      }
  }

  handleChange = (event) =>{
    var target = event.target;
    var value = target.value;
    this.setState({
      txtselect: value 
    })
    this.props.onFetchApiProduct(value)
  }
  render(){
    const {product} = this.props
  return (
            <div className="card text-left">
            <select
            className="form-control"
            value={this.state.txtselect}
            name="txtselect"
            onChange={this.handleChange}>
            <option>Categories</option>
            {product.map((e,index) =>{
              return <option key={index} value={e.id}>{e.name}</option>
            })}
            </select>
            <h4 className="card-title">Danh sách sản phẩm</h4>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                   {this.props.children}
                  </tbody>
                </table>
              </div>
            </div>
  );}
}

const mapStatetoProps = (state) =>{
  return {
    product: state.Product
  }
}

const mapDispatchtoProps = (dispatch,props) =>{
  return {
    onFetchApiProduct: (id) =>{
      dispatch(actions.fetchApiProductRequest(id))
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(List);
