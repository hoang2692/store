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
                                <th style={{ width: '15%' }}>yêu cầu</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
      
      </div>
    );
  }
}
export default Cart;