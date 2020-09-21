import React,{Component} from 'react';

class Props_demo extends Component {
	render (){
  return (
    <div className="container">
      <div className="col-md-4 col-12">
        <div className="card size mb-3">
          <img src="Hình của sản phẩm" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">tiêu đề sản phẩm</h5>
          <p className="card-text">
            thông tin sản phẩm
          </p>
          <a className="btn btn-primary">
            Mua
          </a>
          <a className="btn btn-warning ml-1">
            Xem chi tiet
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}}

export default Props_demo;