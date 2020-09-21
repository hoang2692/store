import React,{Component} from 'react';
import '../App.css';

class Coffee3 extends Component{
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
                <div id="section-ca-phe-arabica-culi-wrapper">
                    <div id="" className="section-ca-phe-arabica-culi item-wrapper ">
                        <div className="cat-item thumbright">
                            <div className="cat-img">
                                <img src="../../img/31b4064ccbc2b5-cpharabicaculiphclong.jpg" alt="CÀ PHÊ ARABICA - CULI"/>
                            </div>
                            <div class="cat-content">
                                <div class="title" data-text="CÀ PHÊ ARABICA - CULI">CÀ PHÊ ARABICA - CULI</div>
                                <div class="description">
                                    Hương cà phê Arabica rất thơm, có vị chua, sau khi uống đọng lại cảm giác ngọt ở cổ họng. Arabica Cầu Đất có vị chua thanh xen lẫn với vị đắng nhẹ, nước pha màu nước nâu nhạt, trong trẻo của hổ phách. Mùi hương của Arabica rất thanh tao, quý phái, ...
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>    
                                                      
                <div id="section-ca-phe-cherry-wrapper">
                    <div id="" class="section-ca-phe-cherry item-wrapper ">
                        <div class="cat-item thumbleft">
                            <div class="cat-img">
                                <img src="../../img/a712453ec1833f-cphcherryphclong.jpg" alt="CÀ PHÊ CHERRY"/>
                            </div>
                            <div class="cat-content">
                                <div class="title" data-text="CÀ PHÊ CHERRY">CÀ PHÊ CHERRY</div>
                                <div class="description">
                                    Cà phê Cherry còn được gọi là cà phê Mít. Hạt cà phê Cherry có màu vàng, sáng bóng rất đẹp. Hương vị tuy không đậm đà như Robusta, cũng không nồng nàn như Arabica, nhưng cà phê Cherry mang đặc trưng riêng: chua nhẹ, hơi chát, hàm lượng caffein thấp, cùng hương thơm thoang thoảng.
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>    
                                                      
                <div id="section-ca-phe-moka-wrapper">
                    <div id="" className="section-ca-phe-moka item-wrapper ">
                        <div className="cat-item thumbright">
                            <div className="cat-img">
                                <img src="../../img/12367d8b28b1aa-cphmokaphclong.jpg" alt="CÀ PHÊ MOKA"/>
                            </div>
                            <div className="cat-content">
                                <div className="title" data-text="CÀ PHÊ MOKA">CÀ PHÊ MOKA</div>
                                <div className="description">
                                    Cà phê Moka là giống cà phê rất khó trồng, thuộc chi Arabica, được trồng phổ biến tại Đà Lạt, Lâm Đồng, đặc biệt là Moka Cầu Đất. Ở Việt Nam, cà phê Moka được xếp vào sản phẩm thực sự quý hiếm bởi chất lượng và hương vị tuyệt vời: thơm sang trọng, chua thanh thoát.
                                </div>
                                
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
export default Coffee3;