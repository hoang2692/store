import React,{Component} from 'react';
import '../App.css';
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
    <div style={{position:'sticky',top:'0',zIndex:'3'}}>
    <div className="topnav"  alt='menubar' id="navba">
        <a href="#home">Trang chủ</a>
        <a >Quản lý sản phẩm</a>
        <a >Quản lý nhân viên</a>
        <a >Quản lý đơn hàng</a>
        <a >Quản lý Members</a>
        <a >Đăng xuất</a>
        <a style={{fontSize: '15px'}} className="icon" onClick={this.clicKed}>☰</a>
      </div>
      </div>
      
  );
  
}

}

export default Navadmin;

