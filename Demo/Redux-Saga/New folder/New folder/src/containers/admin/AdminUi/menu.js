import React,{Component} from 'react';
import '../../../App.css';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";
class Navadmin extends Component {
  
  clicKed=()=> {
  var x = document.getElementById('navba');
  if (x.className === "topnav") {
    x.className = "topnav responsive";
  } else {
    x.className = "topnav";
  }
}


  render(){
  return (
    <Router>
    <div style={{position:'sticky',top:'0',zIndex:'3'}}>
    <div className="topnav"  alt='menubar' id="navba">
        <a href="/">Trang chủ</a>
        <a href='/quanly/sanpham'>Quản lý sản phẩm</a>
        <a href='/quanly/nhanvien'>Quản lý nhân viên</a>
        <a href='/quanly/donhang'>Quản lý đơn hàng</a>
        <a href='/quanly/members'>Quản lý menu</a>
        <Link to="">Đăng nhập</Link>
        <Link to="" style={{fontSize: '15px'}} className="icon" onClick={this.clicKed}>☰</Link>
      </div>
      </div>
     </Router> 
  );
  
}

}

export default Navadmin;
