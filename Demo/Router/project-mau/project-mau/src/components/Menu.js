import React,{Component} from 'react';
import '../App.css';
import {
  BrowserRouter as Router,Link
} from "react-router-dom";
class Menu extends Component {
  
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
        
        <Link to="/">Trang chủ</Link>
        <div className="dropdwn">
          <button className="dropbtn">Cà phê 
            
          </button>
          <div className="dropdwn-content">
            <Link to="/about">Hành trình cafe đậm vị</Link>
            <a href="/caphe">Hạt cà phê Phúc Long</a>
          </div>
        </div> 
        <div className="dropdwn">
          <button className="dropbtn" >Trà 
            
          </button>
          <div className="dropdwn-content">
            <a href="/tra/hanhtrinh">Hành trình tách trà đậm vị</a>
            <a href="/tra">Lá trà Phúc Long</a>
          </div>
        </div> 
        <div className="dropdwn">
          <button className="dropbtn">Sản phẩm
            
          </button>
          <div className="dropdwn-content">
            <a href="/sanpham">Thức uống</a>
            <a href="/sanpham/bakery">Món ngọt</a>
            <a href="/sanpham/monman">Món mặn</a>
          </div>
        </div> 
        
         
        <a href="/dangky">Thẻ</a>
        <a href="/cart">Giỏ hàng</a>
        <div className="dropdwn">
          <button className="dropbtn">Đăng nhập 
            
          </button>
        </div>
        <a href='#' style={{fontSize: '15px'}} className="icon" onClick={this.clicKed}>☰</a>
        
      </div>
      </div>   
  );
  
}

}

export default Menu;


