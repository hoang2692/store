import React,{Component} from 'react';
import '../App.css';
class Navmenu extends Component {
  
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
        <div className="dropdwn">
          <button className="dropbtn">Cà phê 
            
          </button>
          <div className="dropdwn-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> 
        <div className="dropdwn">
          <button className="dropbtn">Trà 
            
          </button>
          <div className="dropdwn-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> 
        <div className="dropdwn">
          <button className="dropbtn">Thức uống
            
          </button>
          <div className="dropdwn-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> 
        
         
        <a href="#contact">Thẻ</a>
	<a href="#contact">Giỏ hàng</a>
        <div className="dropdwn">
          <button className="dropbtn">Đăng nhập 
            
          </button>
          <div className="dropdwn-content">
            <a href="#">Khách Hàng</a>
            <a href="#">Quản lý</a>
          </div>
        </div>
        <a style={{fontSize: '15px'}} className="icon" onClick={this.clicKed}>☰</a>
        
      </div>
      </div>
      
  );
  
}

}

export default Navmenu;

