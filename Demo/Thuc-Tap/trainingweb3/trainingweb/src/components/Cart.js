import React,{Component} from 'react';

import '../App.css';
class Cart extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row justify-content-center">
      <h1 >Chi tiết đơn hàng</h1>
      </div>
      
      <div className="container">
                <div className="page-header">
                    
                </div>
                
                
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách sản phẩm</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th style={{ width: '10%' }}>Số lượng</th>
                                <th style={{ width: '15%' }} className="text-center">giá tiền</th>
                                <th style={{ width: '15%', }}>Sửa </th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.props.children}
                        </tbody>
                    </table>
                    <button style={{ marginTop: '50px', marginLeft: '100px', backgroundColor: '#0d713d', color: 'White' }} type="button" className="btn " >Hủy</button>
              <a href='/cart/deliver' style={{ marginTop: '50px', marginLeft: '100px', backgroundColor: '#0d713d', color: 'White' }} type="button" className="btn " >Tiếp tục</a>
                </div>
            </div>
      
      </div>
    );
  }
}
export default Cart;