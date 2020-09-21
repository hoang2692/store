import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class PageAction extends Component {
  constructor(props){
    super(props);
      this.state={
        id: '',
        txtname: '',
        txtprice: '',
        txtcbk: true
      }
  }

  componentDidMount(){
    var {match} = this.props;
    var id= match.params.id;
    console.log(id)
    if(match)
    {
      var id= match.params.id;
      this.props.editProducts(id)
      
    }

  }

  UNSAFE_componentWillReceiveProps(nextprops){
      if(nextprops && nextprops.itemEdit)
      {
        var {itemEdit}= nextprops
        this.setState({
          id: itemEdit.id,
          txtname: itemEdit.name,
          txtprice: itemEdit.price,
          txtcbk: itemEdit.status
        })
      }
  }

  onChang = (e) =>{
    var target= e.target;
    var name= target.name;
    var value= target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave= (e) =>{
    var {history} = this.props;
    var products={
      id: this.state.id,
      Name: this.state.txtname,
      Price:this.state.txtprice,
      User: "2",
      Category: 52,
      Content: "ads"
  }
    e.preventDefault()
    if(this.state.id)
    {
      this.props.onUpdate(products)
    }else{
        this.props.addProducts(products)  
    }
    history.goBack()
    
  }

  render(){
    var {txtname,txtprice,txtcbk}= this.state;
  return (
      <div>
      <form  onSubmit={this.onSave}>
         <div className="col-6 mt-5">
           <div className="form-group">
             <label>Tên sản phẩm</label>
             <input type="text" className="form-control" name="txtname" value={txtname}  required onChange={this.onChang}/>
             <label>Giá</label>
             <input type="number" className="form-control" name="txtprice" value={txtprice}  required onChange={this.onChang}/>
             <label>Trạng thái</label>
             <div className="form-check">
           
               <label className="form-check-label">
                 <input type="checkbox" className="form-check-input" value={txtcbk} name="txtcbk" onChange={this.onChang} checked={txtcbk}/>
                  Còn hàng
               </label>
             </div>
             <button className="btn btn-primary" type="submit">Lưu</button>
             <Link to="/product-items" className="btn btn-danger ml-2">Trở về</Link>
           </div>
         </div>
      </form>
    </div>
  );}
}


const mapStatetoProps = (state) =>{
  return {
    itemEdit: state.ItemEdit
  }
}

const mapDispatchtoProps = (dispatch,props) =>{
  return {
    addProducts: (products) =>{
      dispatch(actions.addProductsRequest(products))
    },
    editProducts: (id) =>{
      dispatch(actions.edditProductsRequest(id))
    },
    onUpdate: (products) =>{
      dispatch(actions.updateProductsRequest(products))
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PageAction);
