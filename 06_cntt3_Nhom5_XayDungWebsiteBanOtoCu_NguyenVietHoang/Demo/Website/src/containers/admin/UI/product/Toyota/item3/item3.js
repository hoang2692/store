import React, { Component } from "react";
import { connect } from "react-redux";
import images from "../../../product/assets/index";

class Item3 extends Component {
  constructor(props){
    super(props);
    this.state={
      id: "",
      txtname: "",
      txtprice: "",
      show: false
    }
  }

  onShow = () =>{
    this.setState({
      show: !this.state.show,
      txtname: "",
      txtprice: "",
      id: ""
    })
  }

  onClose = () =>{
    this.setState({
      show: false,
      txtname: '',
      txtprice: ''
    })
  }

  _onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:  value
    })
    console.log(this.state)
  }

  onEdit = (id) =>{
    this.props.getEditData(id);
    this.setState({
      show: true
    })
  }

  _onSubmit = (event) =>{
    event.preventDefault();
    var data ={
      id: this.state.id,
      name: this.state.txtname,
      price: this.state.txtprice
    }
    if(this.state.id)
    {
      this.props.update(data)
    }
    else
    {
      this.props.AddSanPham(data);
    }
    this.setState({
      show: false,
      txtname: "",
      txtprice: ""
    })
  }

  UNSAFE_componentWillReceiveProps(nextprops){
    if(nextprops && nextprops.dataEdit)
     var {dataEdit} = nextprops;
    {
      this.setState({
        id: dataEdit.id,
        txtname: dataEdit.name,
        txtprice: dataEdit.price
      })
    }
  }
  render() {
    const {products} = this.props.products ? this.props : {};
    return (
      <div className="row">
      <div style={{paddingTop: '10px',marginRight: '5px'}}>
      <a className="btn btn" onClick={this.onShow} style={{backgroundColor: 'green',color: 'white'}}>
        Thêm sản phẩm
      </a>
    </div>
    {this.state.show ? <form onSubmit={this._onSubmit} style={{padding: '10px 50px',backgroundColor: 'green', borderRadius: '5px'}}>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name= "txtname"
                  value={this.state.txtname || ''}
                  className="form-control"
                  placeholder="Name"
                  onChange={this._onChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  name= "txtprice"
                  value={this.state.txtprice || ''}
                  className="form-control"
                  placeholder="Price"
                  onChange={this._onChange}
                  required
                />
              </div>
              <div>
                <button className="btn btn-warning mr-2" type="reset" onClick={this.onClose} >Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </form> : ''}
      <table className="table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>STT</th>
            <th style={{textAlign: "center"}}>Name</th>
            <th style={{textAlign: "center"}}>Price</th>
            <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
        {products.map((e,index) =>{
          return (
            <tr key={index}>
            <td style={{textAlign: "center"}}>{index +1}</td>
            <td style={{textAlign: "center"}}>{e.name}</td>
            <td style={{textAlign: "center"}}>{e.price}</td>
            <td>
              <div className="row" style={{justifyContent: "center"}}>
                <a className="btn btn-warning mr-2" role="button" onClick={() => this.onEdit(e.id)}>Edit</a>
                <a className="btn btn-danger" role="button" onClick={() => this._onDelete(e.id)}>Delete</a>
              </div>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    );
  }
  componentDidMount(){
    this.props.getData();
  }

  _onDelete = (id) =>{
    this.props._onDelete(id);
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.DadungToyotas.data,
    dataEdit: state.EditToyotas.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () =>dispatch({type: "GET_TOYOTA_DADUNG_REQUEST"}),
    _onDelete: (id) =>dispatch({type: "DELETE_TOYOTA_DADUNG_REQUEST", id:id}),
    AddSanPham: (data) =>dispatch({type: "ADD_TOYOTA_DADUNG_REQUEST", data}),
    getEditData: (id) => dispatch({type:"GETEDIT_TOYOTA_DADUNG_REQUEST", id}),
    update: (data) =>dispatch({type: "UPDATE_TOYOTA_DADUNG_REQUEST", data})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item3);
