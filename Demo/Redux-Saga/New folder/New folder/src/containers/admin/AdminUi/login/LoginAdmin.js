import React, { Component } from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';


class LoginAdmin extends Component {
    render() {
        return (
            <div className="container-fluid pt-1" style={{ backgroundColor: '#efefef' }}>
                <div className="container" style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}>
                    <form className="form-DK">
                        <h1>LOGIN ADMIN</h1> 
                        <div className="form-row" style={{ justifyContent: 'center' }} >
                            <div className="form-group col-md-4"  >
                                <label className='leble-Dn1' > Username  <span>(*)</span></label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter account" required/>
                                <label  className="mr-sm-2 pt-5 leble-Dn1">Password<span>(*)</span></label>
                                <input type="password" className="form-control mb-2 mr-sm-2"  placeholder="Enter password" required/>
                                <p>
                                Forgot password ?<i><Link className="badge" style={{color:'#0d713d', fontSize:'16px'}}>click here</Link></i></p>
                            </div>
                        </div>
                        <div className="form-row" style={{textAlign: 'center',justifyContent: 'center' }} >
                            <div className="form-group col-md-4 ">
                                    <button className="btn" type="submit" style={{backgroundColor:'#0d713d',color:'White' }}  >LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginAdmin;