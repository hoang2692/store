import React,{Component} from 'react';

class Render_demo extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			isLogin:false
		}
	};
	login = () => {
		this.setState({isLogin:true})
	};
	userName='Hoang';
	render(){
    return(
        <div>
        {this.state.isLogin ? alert('Hello ' + this.userName) : <button onClick={this.login}>Click Me</button>}
        </div>
        );}
}
export default Render_demo;