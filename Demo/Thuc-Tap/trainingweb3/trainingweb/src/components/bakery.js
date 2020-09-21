import React,{Component} from 'react';
import '../App.css';

class Bakery extends Component{
    render(){
        return(
    <div>
        <img className="img-bia" src="../../img/3c1de90e955d1a-8ed98f521583690431954887e772tuyendung1.jpg" alt="bakery"></img>
	    <div className="page-heading">
      	    <div className="container">
              <div className="row justify-content-center"><center>
              <div className="dieuhuong">
              <span><a href="true">Trang chủ</a>&nbsp;/&nbsp; 
              <a href="true" className="active">Sản phẩm</a></span>
              </div></center>
          </div>
                <h1>Bakery</h1>
				<div className="logolatra">
                    <img src="../../img/icon_latra.png" style={{width:'30%'}} alt="icon_latra"/>
				</div>
                <ul className="nav nav-pills mb-3 align-just-center" id="pills-tab" role="tablist">
                    <li className="nav-item">

                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link " id="pills-home-tab" href='/sanpham/thucuong'  role="tab" aria-controls="pills-home" aria-selected="true">
                                THỨC UỐNG
                            </a> 
                    </li>
                    <li className="nav-item">
                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link" id="pills-profile-tab" href='/sanpham/monman' role="tab" aria-controls="pills-profile" aria-selected="false">
                                DINNING OFFER
                        </a> 
                    </li>
                    <li className="nav-item">
                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link active" id="pills-contact-tab" href='/sanpham/bakery' role="tab" aria-controls="pills-contact" aria-selected="false">
                                BAKERY
                        </a> 
                    </li>
                </ul>   
     	    </div>
	    </div>

	
    <div className="container " >
        <div className="row justify-content-center searchbar">
            <form id="category_filter" className="form-inline" style={{width:"100%"}}>  
                <div className="col-xs-12 col-md-6 col-sm-6 justify-content-center" style={{borderRight:'1px solid grey'}}>
                        <label >Theo giá</label>
                        <div>
                        <select name="price-range" className="selectpicker">
                            <option value="value">Không lựa chọn</option>
                            <option  value="asc">Từ thấp đến cao</option>
                            <option  value="desc">Từ cao đến thấp</option>
                        </select>
                        </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 justify-content-center ">
                    <label> Tìm kiếm</label>
                    <div className="input-group add-on">
                        <input 
                            className="form-control "
                            style={{marginBottom:'1%'}} 
                            placeholder="Tên sản phẩm" 
                            name="keyword" 
                            id="srch-term" 
                            type="text"
                            //value = ''
                        />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
    


    <div className="grid-item category-drink">
	    <div className="container">
			    <div className="row">
				    <div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <span className="badge new">Món mới</span>
                        <img className="item-img img-responsive center-block lazy" src="../../img/452326c94afd94-raspberryredvelvet.jpg" alt="Raspberry Redvelvet"/>

                        <div className="item-info">
                            <div className="item-name">Raspberry Redvelvet</div>
                            <div className="item-desc"></div>         
                            <div className="item-price">30.000 đ</div>
                            <button className="btn btn-default ">Liên hệ</button>
                        </div>
                        </div>
                    </div>

                    <div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <span className="badge new">Món mới</span>
                        <img className="item-img img-responsive center-block lazy" src="../../img/f041af9c13fefd-strawberrycheesecake.jpg" alt="Strawberry Cheesecake"/>                       
                        <div className="item-info">
                            <div className="item-name">Strawberry Cheesecake</div>
                            <div className="item-desc"></div>        
                            <div className="item-price">30.000 đ</div>
                            <button className="btn btn-default ">Liên hệ</button>
                        </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/044784e7d82d50-hudacthom.png" alt="Mứt Đác Thơm"/>
                            <div className="item-info">
                                <div className="item-name">Mứt Đác Thơm</div>
                                <div className="item-price">29.000 đ</div>
                                <button className="btn btn-default add-to-cart" data-id="542"
                                    data-name="Mứt Đác Thơm"
                                    data-price="29000">Đặt hàng</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/05602666df6293-hudaccam.png" alt="Mứt Đác Cam"/>
                            <div className="item-info">
                                <div className="item-name">Mứt Đác Cam</div>
                                <div className="item-price">29.000 đ</div>
                                <button className="btn btn-default add-to-cart" data-id="541"
                                    data-name="Mứt Đác Cam"
                                    data-price="29000">Đặt hàng</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/f22454a67e794c-pannacottastrawberry.png" alt="Panna Cotta Strawberry"/>
                            <div className="item-info">
                                <div className="item-name">Panna Cotta Strawberry</div>
                                <div className="item-desc"></div>
                                <div className="item-price">38.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/45d4756da972cd-banhphap_0007s_0001_coffeegeatcaux.jpg" alt="Coffee Gateaux"/>
                            <div className="item-info">
                                <div className="item-name">Coffee Gateaux</div>
                                <div className="item-desc"></div>
                                <div className="item-price">28.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/6428ee2a20ef1e-banhphap_0006s_0001_greenteachocolate.jpg" alt="Green tea Chocolate"/>
                            <div className="item-info">
                                <div className="item-name">Green tea Chocolate</div>
                                <div className="item-desc"></div>
                                <div className="item-price">32.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/0d80107cb60a8d-banhphap_0001s_0001_appledanish.jpg" alt="Apple Danish"/>
                            <div className="item-info">
                                <div className="item-name">Apple Danish</div>
                                <div className="item-desc"></div>
                                <div className="item-price">17.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/fda042835935bc-banhphap_0002s_0000_raisin.jpg" alt="Raisin Danish"/>
                            <div className="item-info">
                                <div className="item-name">Raisin Danish</div>
                                <div className="item-desc"></div>
                                <div className="item-price">17.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/a1c4d22a41ec76-banhphap_0003s_0000_chocobuttercroissant.jpg" alt="Butter Chocolate Croissant 30g"/>
                            <div className="item-info">
                                <div className="item-name">Butter Chocolate Croissant 30g</div>
                                <div className="item-desc"></div>
                                <div className="item-price">17.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/01b9696b860549-banhphap_0000s_0001_buttercroissant.jpg" alt="Pure Butter Croissant 30g"/>
                            <div className="item-info">
                                <div className="item-name">Pure Butter Croissant 30g</div>
                                <div className="item-desc"></div>
                                <div className="item-price">20.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/2287e22240ad3b-banhphap_0008s_0001_brownie.jpg" alt="Brownie Pax"/>
                            <div className="item-info">
                                <div className="item-name">Brownie Pax</div>
                                <div className="item-desc"></div>
                                <div className="item-price">45.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/f7e6116eef86b6-banhphap_0005s_0000_tiramisu.jpg" alt="Tiramisu"/>
                            <div className="item-info">
                                <div className="item-name">Tiramisu</div>
                                <div className="item-desc"></div>
                                <div className="item-price">35.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/28f78f176da1fb-banhphap_0004s_0000_passioncheese.jpg" alt="Passion Cheese Pax"/>
                            <div className="item-info">
                                <div className="item-name">Passion Cheese Pax</div>
                                <div className="item-desc"></div>
                                <div className="item-price">32.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/e8912187484de9-banhphap_0009s_0002_montecarlo.jpg" alt="Monter Carlo Pax"/>
                            <div className="item-info">
                                <div className="item-name">Monter Carlo Pax</div>
                                <div className="item-desc"></div>
                                <div className="item-price">45.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

				</div>

		    </div>
        </div>

    </div>
        );
    }
}
export default Bakery;