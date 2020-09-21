import React,{Component} from 'react';
import '../App.css';
class Billmanager extends Component{
  render(){
    return(
      
      <div className="container-fluid">
      <div className="row justify-content-center">
      <h1 >Quản lý hóa đơn</h1>
      </div>
      
      <div className="container">
                <div className="page-header">
                    
                </div>
                <div className="row justify-content-center">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm mã đơn" />
                            <span className="input-group-btn">
                                <button className="btn btn-info" type="button">Xóa</button>
                            </span>
                        </div>
                </div>
                
                
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách sản phẩm</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }} className="text-center">Mã đơn</th>
                                <th>Tên người đặt</th>
                                <th>danh sách sản phẩm</th>
                                <th style={{ width: '15%' }} className="text-center">giá tiền</th>
                                <th style={{ width: '15%' }}>Ngày đặt</th>
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
export default Billmanager;