import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ListItem extends Component {

  onDelete = (id) =>{
    if(confirm('Bạn chắc chắn muộn xóa chứ?')){ // eslint-disable-line
        this.props.onDelete(id)
    }
  }

  render(){
    var {product,index} = this.props;
    console.log(product)
  return (
                    <tr>
                      <td>{index}</td>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        {product.status === true ? <span><label className=" btn btn-primary btn-sm">Còn hàng</label></span> : <span><label className=" btn btn-warning btn-sm">Hết hàng</label></span>}
                      </td>
                      <td>
                          <Link to={`/products/${product.id}/edit`} className="btn btn-primary btn-sm mr-2">Sửa</Link>
                          <button type="button" className="btn btn-danger btn-sm" onClick={() => this.onDelete(product.id)}>Xóa</button>
                      </td>
                    </tr>
  );}
}

export default ListItem;
