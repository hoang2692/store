import React,{Component} from 'react';

class Table_demo extends Component {
	constructor(props)
	{
		super(props);
		this.state={
		mangsp:[
		{
			maSp:1,tenSp:'Ipone X',gia:100000
		},
		{
			maSp:2,tenSp:'Samsung',gia:200000
		},
		{
			maSp:1,tenSp:'Xiaomi',gia:300000
		},
		]
	}
};
	render(){
		let renderTable=this.state.mangsp.map((sp,index) =>{
			return <tr key={index}>
			<td>{sp.maSp}</td>
			<td>{sp.tenSp}</td>
			<td>{sp.gia}</td>
			</tr>
		});
		return(
			<div class="container">
			  <div class="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
			  	<table class="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
			  	  <thead class="thead-dark|thead-light">
			  	    <tr>
			  	      <th scope="col">maSp</th>
			  	      <th scope="col">tenSp</th>
			  	      <th scope="col">gia</th>
			  	    </tr>
			  	  </thead>
			  	  <tbody>
			  	    {renderTable}
			  	  </tbody>
			  	</table>
			  </div>
			</div>
			);
	}
}

export default Table_demo;