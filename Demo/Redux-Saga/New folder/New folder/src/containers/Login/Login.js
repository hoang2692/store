import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div className="container-fluid pt-1" style={{ backgroundColor: '#efefef' }}>
                <div className="container" style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}>
                    <form className="form-DK">
                        <h1> THÀNH VIÊN ĐĂNG NHẬP </h1>
                        <div className="form-row" style={{ justifyContent: 'center' }} >
                            <div className="form-group col-md-4"  >
                                <label className='leble-Dn1' > Email/Số thẻ  <span>(*)</span></label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Nhập Email/Số thẻ" required/>
                                <label  className="mr-sm-2 pt-5 leble-Dn1">Mật khẩu<span>(*)</span></label>
                                <input type="password" className="form-control mb-2 mr-sm-2"  placeholder="Nhập mật khẩu" required/>
                                <p>Quên mật khẩu? bấm<i><Link className="badge" style={{color:'#0d713d', fontSize:'16px'}}>vào đây</Link></i></p>
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
        )
    }
}

export default Login;