import React,{Component} from 'react';
import '../App.css';

class Coffee1 extends Component{
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
                        <a  href="/caphe/coffe1">Đậm vị hạt cà phê rang xay</a>
                        <a  href="/caphe/coffe2">Hương vị mạnh mẽ</a>
                        <a  href="/caphe/coffe3">Hương vị tinh tế</a>
                        <a  href="/caphe/coffe4">Cà phê mùi</a>
                    </ul>   
     	</div>
	</div>
        <div className="content_fields">
            <div className="form-group item-right">
				<div className="col-ct-6">
                    <img src='../../img/caphe.jpg' alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
                    Cà phê càng được rang sẫm màu hương vị càng trọn vẹn. Rang cà phê là một quá trình đòi hỏi sự tinh tế từ đôi bàn tay và sự 
					am hiểu từng loại hạt cà phê của người nghệ nhân. Rang lửa nhỏ khiến cà phê chưa chín tới và đắng hơn,
					 trong khi rang quá kỹ lại khiến cà phê cháy khét đánh mất những đặc tính thượng hạng vốn có. Trong quá trình 
					 rang đủ thời gian, những dinh dưỡng như proteins, enzymes mới sẽ tích tụ phía trong tạo nên phần chất 
					 của cà phê, làm cho cà phê đậm hơn, sánh hơn.
                </div>
            </div>
            <div className="form-group ">
                <div className="col-ct-6">
                    <img src="../../img/caphephuclong.jpg" alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
					Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn chú trọng bốn đặc tính từ trái cà phê nhằm tôn trọng nguyên bản cho tách cà phê đậm vị.<br/>
					- Hương thơm là mùi hương của hạt cà phê - thơm bao nhiêu hứa hẹn cho nhiều vị bấy nhiêu.<br/>
					- Thể chất là khái niệm để chỉ độ đậm đà trong nước chiết xuất cà phê. cảm nhận thông qua đánh giá của người thưởng thức.<br/>
					- Acid là hợp chất tạo nên vị chua thanh của cà phê.<br/>
					- Hậu vị là cảm nhận vị cà phê còn đọng lại sau khi thưởng thức.
                </div>
            </div>
            <div className="form-group item-right">
                <div className="col-ct-6">
                    <img src="../../img/cafe2.jpg" alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
					Tách cà phê hoàn hảo được định nghĩa là tách cà phê có vị đắng đậm đà, chua thanh thoát, lan toả hương thơm nồng nàn, dễ dàng chinh phục vị giác của bất cứ ai. <br/>
					Tách cà phê đậm vị luôn luôn là thức uống giữ vị trí nhất định trong lòng những tín đồ cà phê Việt, dù văn hoá thưởng thức có nhiều thay đổi theo sự phát triển từng ngày của xã hội. 
                </div>
            </div>
   	 	</div>
		</div>
        );
    }
}
export default Coffee1;