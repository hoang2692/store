import React,{Component} from 'react';
import Navadmin from './components/Navadmin';
import './App.css';
import Billmanager from './components/Billmanager';
import Productmanager from './components/Productmanager';
import Employeemanager from './components/Employee';
import Members from './components/Members';
class Adminstrator extends Component{
  render(){
    return(
      <div>
      <div className="container-fluid pt-1" style={{ backgroundColor: '#efefef' }}>
                <div className="container" style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}>
                    <form className="form-DK">
                        <h1>Đăng nhập quản lý</h1>
                        <div className="form-row" style={{ justifyContent: 'center' }} >
                            <div className="form-group col-md-4"  >
                                <label className='leble-Dn1' > Tên đăng nhập  <span>(*)</span></label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Nhập Users" required/>
                                <label  className="mr-sm-2 pt-5 leble-Dn1">Mật khẩu<span>(*)</span></label>
                                <input type="password" className="form-control mb-2 mr-sm-2"  placeholder="Nhập mật khẩu" required/>
                            </div>
                        </div>
                        <div className="form-row" style={{textAlign: 'center',justifyContent: 'center' }} >
                            <div className="form-group col-md-4 ">
                                    <button className="btn" type="submit" style={{backgroundColor:'#0d713d',color:'White' }}  >ĐĂNG NHẬP</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
  }
}
export default Adminstrator;