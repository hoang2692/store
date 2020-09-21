import React,{Component} from 'react';
import '../App.css';
class Productmanager extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row justify-content-center">
      <h1 >Quản lý sản phẩm</h1>
      </div>
      
      <div className="container">
                <div className="page-header">
                    
                </div>
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm mã đơn" />
                            <span className="input-group-btn">
                                <button className="btn btn-info" type="button">Xóa</button>
                            </span>
                        </div>
                    </div>

                    
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      <button type="button" className="btn btn-info btn-block marginB10">Thêm sản phẩm</button>
                      <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Giá" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Link ảnh" />
                            </div>
                            <button type="button" className="btn btn-primary">Thêm</button>
                            <button type="button" className="btn btn-default">Hủy</button>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
                
                
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách sản phẩm</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }} className="text-center">Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th style={{ width: '15%' }} className="text-center">giá tiền</th>
                                <th style={{ width: '15%' }}>Ảnh</th>
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
export default Productmanager;