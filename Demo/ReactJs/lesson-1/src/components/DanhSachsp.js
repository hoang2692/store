import React,{Component} from 'react';

import SanPham from './sanPham';

class DanhSachSanPham extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			sanPhamchiTiet:{maSp:1,tenSp:"Vismart",manHinh:"AMOLED",heDieuHanh:"Android 9.0",cameraTruoc:"20 MP",cameraSau:"Chinh 48 MP & Phu 8 MP",ram:"4GB",rom:"64GB",giaBan:5700000,hinhAnh:"././img/vsmart.png"}
		}
	};

	mangSanPham=[
	{
		maSp:1,tenSp:"Vismart",manHinh:"AMOLED",heDieuHanh:"Android 9.0",cameraTruoc:"20 MP",cameraSau:"Chinh 48 MP & Phu 8 MP",ram:"12GB",rom:"64GB",giaBan:5700000,hinhAnh:"././img/vsmart.png"
	},
	{
		maSp:2,tenSp:"Iphone X",manHinh:"AMOLED",heDieuHanh:"IOS",cameraTruoc:"20 MP",cameraSau:"Chinh 48 MP & Phu 8 MP",ram:"4GB",rom:"256GB",giaBan:15700000,hinhAnh:"././img/iphone.jpg"
	},
	{
		maSp:3,tenSp:"Huawaii",manHinh:"AMOLED",heDieuHanh:"Android 10.0",cameraTruoc:"20 MP",cameraSau:"Chinh 48 MP & Phu 8 MP",ram:"8GB",rom:"128GB",giaBan:9700000,hinhAnh:"././img/huawi.jpg"
	}];

	xemchitiet = (sanPham) =>{
			this.setState({sanPhamchiTiet:sanPham})
		};

	render(){
		let {sanPhamchiTiet}=this.state;

		let danhsachSP=this.mangSanPham.map((sp,index) => {
				      		return <SanPham key={index}
				      						xemchitiet={this.xemchitiet}
				      						sanPham={sp}>
				      				</SanPham>
				      			}
				      			);
		return(
			<div>
				<div className="container">
					<h1> Danh Sách Sản Phẩm </h1>
    				<div className="row">
            			{danhsachSP}
        			</div>
        			<div className="row mt-1">
        				<div className="col-md-4">
        				  	<div className="card">
							   	<h2 style={{ textAlign: "center" }} classname="card-title">{this.state.sanPhamchiTiet.tenSp}</h2>
							    <img className="card-img-top" alt="Card image cap" src={this.state.sanPhamchiTiet.hinhAnh} />
							</div>
						</div>
						<div className="col-md-8">
        					<table className="table table-bordered">
							  	<thead>
							    	<tr>
							      		<td colspan="2" ><h3>Thông số kỹ thuật </h3> </td>
							    	</tr>
							  	</thead>
							  	<tbody>
							    	<tr>
							      		<th scope="row">Màn Hình</th>
									    <td>{sanPhamchiTiet.manHinh}</td>
							    	</tr>
							    	<tr>
									    <th scope="row">Hệ Điều Hành</th>
									    <td>{sanPhamchiTiet.heDieuHanh}</td>
							    	</tr>
							    	<tr>
									    <th scope="row">Camera Trước</th>
									    <td>{sanPhamchiTiet.cameraTruoc}</td>
							    	</tr>
							    	<tr>
									    <th scope="row">Camera Sau</th>
									    <td>{sanPhamchiTiet.cameraSau}</td>
							    	</tr>
							    	<tr>
									    <th scope="row">Ram</th>
									    <td>{sanPhamchiTiet.ram}</td>
							    	</tr>
							    	<tr>
									    <th scope="row">Rom</th>
									    <td>{sanPhamchiTiet.rom}</td>
							    	</tr>
							    	
							  	</tbody>
							</table>
        				</div>
        			</div>
        		</div>
        	</div>
			)
	}
}

export default DanhSachSanPham;

