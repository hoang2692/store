import React,{Component} from 'react';

class Demo_ifelse_3ngoi extends Component{
	isLogin = true;
	userName ="Hoang";
    render(){
    return(
        <div>
        {this.isLogin ? alert('Hello ' + this.userName) : alert("Dang nhap that bai")}
        </div>
        )}
}
export default Demo_ifelse_3ngoi;