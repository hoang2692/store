import React,{Component} from 'react';
import '../App.css';

class Dinning extends Component{
    render(){
        return(
    <div>
        <img className="img-bia" src="../../img/035bb0ff5337a6-f31f1487ea3b853793e91869fe90a0c9ef.jpg" alt="bakery"></img>
	    <div className="page-heading">
      	    <div className="container">
              <div className="row justify-content-center"><center>
              <div className="dieuhuong">
              <span><a href="true">Trang chủ</a>&nbsp;/&nbsp; 
              <a href="true" className="active">Sản phẩm</a></span>
              </div></center>
          </div>
                <h1>Dinning Offers</h1>
				<div className="logolatra">
                    <img src="../../img/icon_latra.png" style={{width:'30%'}} alt="icon_latra"/>
				</div>
                <ul className="nav nav-pills mb-3 align-just-center" id="pills-tab" role="tablist">
                    <li className="nav-item">

                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                THỨC UỐNG
                            </a> 
                    </li>
                    <li className="nav-item">
                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                DINNING OFFER
                        </a> 
                    </li>
                    <li className="nav-item">
                        <a style={{width: '200px',textAlign: 'center'}} className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                BACKERY
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
                <div className="col-lg-6 background">
                <div className="row pt-3 pb-3">
                    <div className="col-sm-6">
                        <div className="card-info card-background">
                            <h6 className="card-title" style={{color: '#0C713D', fontSize: '25px',fontWeight: 'bold'}}>Bánh mì Phúc long</h6>
                            <p className="card-text"> 
                            </p>
                            <h5 className="card-title" style={{color: '#0C713D'}}>65.000 đ</h5>
                            <a href="#" className="btn ">
                                    Đặt hàng
                                </a> 
                        </div>
                    </div>
                    <div className="col-sm-6" style={{textAlign: 'right'}}>
                        <span style={{color: 'white', backgroundColor: '#0C713D', fontSize: '12px',right: '10px',position: 'absolute',padding: '5px 6px',fontWeight:900,borderRadius: '3px' }}>Món mới</span>
                        <img className="img-banner" src="../../img/d090295688ccc5-bnhmthtphclong.png" style={{paddingRight:"10%"}}  alt="phuc bon tu" />
                    </div>
                </div>
            </div>

                    

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/199cc915d3396e-mixaochay.jpg" alt="mi-xao-chay"/>
                            <div className="item-info">
                                <div className="item-name">Mì xào chay</div>
                                <div className="item-desc">
                                </div>
                                <div className="item-price">55.000 đ</div>
                                <button className="btn btn-default add-to-cart" 
                                    >Đặt hàng</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/8f81c861a22d14-htiuxob.png" alt="hu-tieu-xao-bo"/>
                            <div className="item-info">
                                <div className="item-name">Hủ tiếu xào bò</div>
                                <div className="item-desc">
                                </div>
                                <div className="item-price">69.000 đ</div>
                                <button className="btn btn-default add-to-cart">Đặt hàng</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/6f0e02a4e6598d-htiuxothpcm.jpg" alt="hu-tiu-xao-thap-cam"/>
                            <div className="item-info">
                                <div className="item-name">Hủ tiếu xào thập cẩm</div>
                                <div className="item-desc"></div>
                                <div className="item-price">59.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/b691020db720e4-bnhmbkho.jpg" alt="banhmibokho"/>
                            <div className="item-info">
                                <div className="item-name">Bánh mì bò kho</div>
                                <div className="item-desc"></div>
                                <div className="item-price">85.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/374fed852c7dc7-hutieumytho.jpg" alt="hutieumytho"/>
                            <div className="item-info">
                                <div className="item-name">Hủ tiếu mỹ tho</div>
                                <div className="item-desc"></div>
                                <div className="item-price">55.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/de0e9f2c34cdef-miyboham.jpg" alt="miyboham"/>
                            <div className="item-info">
                                <div className="item-name">mì ý bò hầm</div>
                                <div className="item-desc"></div>
                                <div className="item-price">75.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/0623c47d2fd0de-cmsnnonkhot2.jpg" alt="comsuonkho"/>
                            <div className="item-info">
                                <div className="item-name">Cơm sườn non kho tộ</div>
                                <div className="item-desc"></div>
                                <div className="item-price">65.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/d9158be9fd5f99-cmcnhgchinncmm.jpg" alt="comgancmam"/>
                            <div className="item-info">
                                <div className="item-name">Cơm cánh gà chiên nước mắm</div>
                                <div className="item-desc"></div>
                                <div className="item-price">60.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/c1e44d4d3d6408-comduigaquay.jpg" alt="comgaquay"/>
                            <div className="item-info">
                                <div className="item-name">Cơm đùi gà quay</div>
                                <div className="item-desc"></div>
                                <div className="item-price">59.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/7109c5848b05ee-bxosat.jpg" alt="combosate"/>
                            <div className="item-info">
                                <div className="item-name">Cơm bò xào sa tế</div>
                                <div className="item-desc"></div>
                                <div className="item-price">75.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/bed806362de6f2-cmigroti.jpg" alt="comgaroti"/>
                            <div className="item-info">
                                <div className="item-name">Cơm đùi gà rôti</div>
                                <div className="item-desc"></div>
                                <div className="item-price">58.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/98165f6f584713-cmbarikhot.jpg" alt="combaroi"/>
                            <div className="item-info">
                                <div className="item-name">Cơm ba rọi kho tộ</div>
                                <div className="item-desc"></div>
                                <div className="item-price">58.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

					<div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/8e48d387460baa-commucxaochuacay.jpg" alt="commuc"/>
                            <div className="item-info">
                                <div className="item-name">Cơm mực xào chua cay</div>
                                <div className="item-desc"></div>
                                <div className="item-price">69.000 đ</div>
                                <button className="btn btn-default ">Liên hệ</button>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-3 col-xs-6  product-item ">
                        <div className="item-wrapper">
                            <img className="item-img img-responsive center-block lazy" src="../../img/95ae3982d0430e-comchienphuclong.jpg" alt="comchien"/>
                            <div className="item-info">
                                <div className="item-name">Cơm chiên phúc long</div>
                                <div className="item-desc"></div>
                                <div className="item-price">55.000 đ</div>
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
export default Dinning;