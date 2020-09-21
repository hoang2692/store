import React,{Component} from 'react';


class DoiMauXe extends Component {
	constructor(props){
		super(props);
		this.state={
			img: '././img/xeDen.jpg'
		}
	};

	xetrang =() => {
		this.setState({img:'././img/xeTrang.jpg'})
	};
	xedo =() => {
		this.setState({img:'././img/xeDo.jpg'})
	};
	xeden =() => {
		this.setState({img:'././img/xeDen.jpg'})
	};

	render(){
  return (
    <div>
   
    <div className="card" style={{ width: "18rem" }}>
     <h1 style={{ textAlign: "center" }}>Đổi mẫu xe </h1>
  <img src={this.state.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <a className="btn btn-primary" onClick={this.xedo}>
      Xe Do
    </a>
    <a className="btn btn-primary ml-1" onClick={this.xeden}>
      Xe Den
    </a>
    <a className="btn btn-primary ml-1" onClick={this.xetrang}>
      Xe Trang
    </a>
  </div>
</div>;
    </div>
  );
}}

export default DoiMauXe;