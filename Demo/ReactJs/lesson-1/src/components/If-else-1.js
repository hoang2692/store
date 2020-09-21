import React,{Component} from 'react';

class Demo_ifelse extends Component{
	isLogin = true;
	userName ="Hoang";
    kiemtra = () =>{
        if(this.isLogin)
        {
        	return <b>Hello {this.userName}</b>
        }
        return <button> Dang Nhap </button>
    }
    render(){
    return(
        <div>
        {this.kiemtra()}
        </div>
        )}
}
export default Demo_ifelse;