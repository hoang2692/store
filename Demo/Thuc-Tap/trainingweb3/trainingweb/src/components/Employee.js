import React,{Component} from 'react';
import '../App.css';
class Employeemanager extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row justify-content-center">
      <h1 >Quản lý nhân viên</h1>
      </div>
      
      <div className="container">
                <div className="page-header">
                    
                </div>
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm mã nhân viên" />
                            <span className="input-group-btn">
                                <button className="btn btn-info" type="button">Xóa</button>
                            </span>
                        </div>
                    </div>

                    
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      <button type="button" className="btn btn-info btn-block marginB10">Quản lý nhân sự</button>
                      <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên nhân viên" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ngày gia nhập" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="chi nhánh" />
                            </div>
                            <button type="button" className="btn btn-primary">Thêm</button>
                            <button type="button" className="btn btn-default">Hủy</button>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
                
                
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách nhân viên</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }} className="text-center">Mã nhân viên</th>
                                <th>Tên nhân viên</th>
                                <th style={{ width: '15%' }} className="text-center">ngày vào làm</th>
                                <th style={{ width: '15%' }}>Địa chỉ</th>
                                <th style={{ width: '15%' }}>số điện thoại</th>
                                <th style={{ width: '15%' }}>chi nhánh</th>
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
export default Employeemanager;