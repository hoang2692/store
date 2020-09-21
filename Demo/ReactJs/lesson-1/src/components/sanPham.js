import React,{Component} from 'react';


class SanPham extends Component{
	render(){
		let {sanPham}=this.props;

		return(
			<div className="col-md-4 col-12">
      			<div className="card">
				  <img src={sanPham.hinhAnh} className="card-img-top" alt={SanPham.tenSp} />
				  	<div className="card-body">
				    	<h5 className="card-title">{sanPham.tenSp}</h5>
    					<a className="btn btn-danger">
      						Thêm Giỏ Hàng
    					</a>
    					<a className="btn btn-warning ml-1" onClick={() => this.props.xemchitiet(sanPham)}>
     						Xem chi tiet
    					</a>
  					</div>
				</div>
			</div>
)}
} 

export default SanPham;