import React,{Component} from 'react';
import '../App.css';
class CartItem extends Component{
  delete=(itemCart)=>{
    this.props.onDelete(itemCart)
  }
  render(){
    var {itemCart} = this.props;
    return(
        <tr>
        <th>{itemCart.sp.name}</th>
        <th style={{textAlign:"center"}}>{itemCart.soLuong}</th>
        <th style={{textAlign:"center"}}>{itemCart.sp.gia}</th>
        <th style={{textAlign:"center"}}> <button onClick={()=>this.delete(itemCart.sp)} type="button" class="btn " style={{backgroundColor:"green",color:"White"}}>Xóa</button></th>
      </tr>
    );
  }
}


export default CartItem;