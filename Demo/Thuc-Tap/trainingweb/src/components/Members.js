import React,{Component} from 'react';
import '../App.css';
class Members extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row justify-content-center">
      <h1 >Quản lý Members</h1>
      </div>
      
      <div className="container">
                <div className="page-header">
                    
                </div>
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm mã Khách hàng" />
                            <span className="input-group-btn">
                                <button className="btn btn-info" type="button">Xóa</button>
                            </span>
                        </div>
                    </div>

                    
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      <button type="button" className="btn btn-info btn-block marginB10">Quản lý mã thẻ</button>
                      <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên khách hàng" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ngày gia nhập" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Địa chỉ" />
                            </div>
                            <button type="button" className="btn btn-primary">Thêm</button>
                            <button type="button" className="btn btn-default">Hủy</button>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
                
                
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách khách hàng</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }} className="text-center">Mã thành viên</th>
                                <th>Tên khách hàng</th>
                                <th style={{ width: '15%' }} className="text-center">ngày đăng ký</th>
                                <th style={{ width: '15%' }}>Địa chỉ</th>
                                <th style={{ width: '15%' }}>Số điện thoại</th>
                                <th style={{ width: '15%' }}>Số căn cước</th>
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
export default Members;