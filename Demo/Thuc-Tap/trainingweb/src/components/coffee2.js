import React,{Component} from 'react';
import '../App.css';

class Coffee2 extends Component{
    render(){
        return(
        <div>
        <img src="../../img/aa17dafb29b433-cphphclong3.jpg" style={{width:'100%'}} alt="cà phê"></img>
          <div className="page-heading">
          <div className="container" >
          <div className="row justify-content-center"><center>
              <div className="dieuhuong">
              <span><a href="true">Trang chủ</a>&nbsp;/&nbsp; 
              <a href="true" className="active">Sản phẩm</a></span>
              </div></center>
          </div>
          <h1>Hạt cà phê Phúc Long</h1>
          <div className="logolatra">
              <img src="../../img/icon_latra.png" style={{width:'30%'}} alt="icon_latra"/>
          </div>
          <ul className="nav nav-tabs menu justify-content-center">
                  <li  className="active" ><a data-toggle="tab" href="#dam-vi-ca-phe-rang-xay">Đậm vị hạt cà phê rang xay</a></li>
                  <li ><a data-toggle="tab" href="true">Hương vị mạnh mẽ</a></li>
                  <li ><a data-toggle="tab" href="#huong-vi-tinh-te">Hương vị tinh tế</a></li>
                  <li ><a data-toggle="tab" href="#ca-phe-mui-1">Cà phê mùi</a></li>
              </ul>   
   </div>
          </div>
            <div className="intro_info">
                <div className="category-product"> 
                    <div id="section-ca-phe-royal-wrapper">
                        <div id="" className="section-ca-phe-royal item-wrapper ">
                            <div className="cat-item thumbright">
                                <div className="cat-img">
                                     <img src="../../img/af1a13f6462b13-cphroyalphclong.jpg" alt="CÀ PHÊ ROYAL"/>
                                </div>
                                <div className="cat-content">
                                    <div className="title" data-text="CÀ PHÊ ROYAL">CÀ PHÊ ROYAL</div>
                                    <div className="description">
                                        Cà phê Royal là sự kết hợp hoàn hảo giữa ba loại hạt: Moka, Robusta và Culi theo tỉ lệ nhất định tạo nên sản phẩm hội tụ của sắc, hương và vị.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>    
                                                                  
                    <div id="section-ca-phe-culi-robusta-wrapper">
                        <div id="" className="section-ca-phe-culi-robusta item-wrapper ">
                            <div className="cat-item thumbleft">
                                <div className="cat-img">
                                    <img src="../../img/58dccbef61198f-cphrobustaphclong.jpg" alt="CÀ PHÊ ROBUSTA"/>
                                </div>
                                <div className="cat-content">
                                    <div className="title" data-text="CÀ PHÊ ROBUSTA">CÀ PHÊ ROBUSTA</div>
                                    <div className="description">
                                        Cà phê Robusta còn gọi là cà phê Vối, đây là giống cà phê được trồng phổ biến tại Việt Nam, đặc biệt là khu vực Tây Nguyên. Việt Nam hiện là nước sản xuất và xuất khẩu cà phê Robusta đứng đầu thế giới. Hạt cà phê Robusta tròn, sậm màu, hàm lượng caffein khoảng 2 – 2.5%.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>    
                                                                  
                    <div id="section-ca-phe-culi-wrapper">
                        <div id="" className="section-ca-phe-culi item-wrapper ">
                            <div className="cat-item thumbright">
                                <div className="cat-img">
                                    <img src="../../img/33847132dd8589-cphculiphclong.jpg" alt="CÀ PHÊ CULI"/>
                                </div>
                                <div className="cat-content">
                                    <div className="title" data-text="CÀ PHÊ CULI">CÀ PHÊ CULI</div>
                                    <div className="description">
                                        Cà phê Culi còn được gọi là Peaberry, có vị đắng gắt, hương thơm say đắm. Cà phê Culi là những trái cà phê đột biến có duy nhất một hạt từ các chủng loại thông thường như Arabica hay Robusta, chỉ chiếm khoảng 5% tổng số lượng cà phê trong một đợt thu hoạch, luôn được chọn lọc và rang riêng để đảm bảo chất lượng hoàn hảo.
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>    
                                                                  
                    <div id="section-ca-phe-king-wrapper">
                        <div id="" className="section-ca-phe-king item-wrapper ">
                            <div className="cat-item thumbleft">
                                <div className="cat-img">
                                    <img src="../../img/dd501047aeba85-cphkingphuclong.jpg" alt="CÀ PHÊ KING"/>
                                </div>
                                <div className="cat-content">
                                    <div className="title" data-text="CÀ PHÊ KING">CÀ PHÊ KING</div>
                                    <div className="description">
                                        Cà phê King là sự kết hợp hài hoà giữa ba loại hạt: vị đắng đầm của hạt Moka, vị đắng đậm của hạt Robusta, cùng với vị đắng gắt của hạt Culi, tạo nên hương vị mạnh mẽ.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>    
                                                                              
                </div>
            </div>
            <div id="huong-vi-tinh-te" className="tab-pane fade ">
                <div className="intro_info">
                                
                </div>
            </div>
        </div>
        
        );
    }
}
export default Coffee2;