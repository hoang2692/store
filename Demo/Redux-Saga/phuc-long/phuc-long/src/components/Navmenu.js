import React,{Component} from 'react';
import '../App.css';
import {
  BrowserRouter as Router,Link
} from "react-router-dom";
import CallAPI from '../API/ApiCaller';
import axios from 'axios'


class Navmenu extends Component {

  constructor(props){
    super(props);
    this.state={
      categories: []
    }
  }
  
  componentDidMount(){
  }

  clicKed=()=> {
  var x = document.getElementById('navba');
  if (x.className === "topnav") {
    x.className = "topnav responsive";
  } else {
    x.className = "topnav";
  }
}

  // showCategories(categories){
  //   var result= null;
  //   result= categories.map((categorie,index)=>{
  //     return <Link to="/foodTable/thuc_uong">{categorie.name}</Link>
  //   })
  // }


  render(){
    var {categories} = this.state;
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios({
        method: 'GET',
        url: 'http://dboi.info/api/categories',
        data: null,
    }).then(res =>{
      console.log(res)
    }).catch(erro =>{
        console.log(erro);
    })
  return (
    <div style={{position:'sticky',top:'0',zIndex:'3'}}>
    <div className="topnav"  alt='menubar' id="navba">
        
        <Link to="/">Trang chủ</Link>
        <div className="dropdwn">
          <button className="dropbtn">Cà phê 
            
          </button>
          <div className="dropdwn-content">
            <Link to="/cafe/hanhtrinh_cf">Hành trình cafe đậm vị</Link>
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

export default Navmenu;

