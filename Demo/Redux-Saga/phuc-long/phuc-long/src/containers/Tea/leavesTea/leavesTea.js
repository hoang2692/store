import React,{Component} from 'react';
import '../../../App.css';

class LeavesTea extends Component{
    render(){
        return(
    <div>
    <img src="../../img/4e85b3e4df5c4c-trphclong.jpg" style={{width:'100%'}} alt="cà phê"></img>
    <div className="page-heading">
          <div className="container" >
                <div className="row justify-content-center"><center>
                    <div className="dieuhuong">
                    <span><a href="true">Trang chủ</a>&nbsp;/&nbsp; 
                    <a href="true" className="active">Sản phẩm</a></span>
                    </div></center>
                </div>
                  <h1>Lá trà Phúc Long</h1>
                  <div>
                  <img src="../../img/icon_latra.png" style={{width:'30%'}} alt="icon_latra"/>
                  </div>
                      <ul className="nav nav-tabs menu justify-content-center">
                        <a href="/tra/latra1">Đậm vị trà truyền thống</a>
                        <a href="/tra/latra2">Lựa chọn loại trà</a>
                      </ul>   
           </div>
      </div>
        <div className="content_fields">
            <div className="form-group item-right">
				<div className="col-ct-6">
                    <img src='../../img/traphuclong1.jpg' alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
                Một cây trà nếu được trồng ở những vùng đất có độ cao và khí hậu khác nhau thì sẽ thu được
                 những loại trà cũng khác nhau. Có thể thấy sự phức tạp đến từ phía bên trong, từ những
                  thành phần cũng như cấu tạo hoá học độc nhất vô nhị mà chỉ mình cây trà có được. Thấu 
                  hiểu điều đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt nhất, một búp và hai
                   lá non thường được chúng tôi thu hái vào thời điểm sáng sớm. Tiếp đến, quy trình sản
                    xuất để cho ra các sản phẩm trà chất lượng cũng được thực hiện khép kín.
                </div>
            </div>
            <div className="form-group ">
                <div className="col-ct-6">
                    <img src="../../img/tr%C3%A0%20ph%C3%BAc%20long%202.jpg" alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
                    Trong quá trình tìm kiếm từng loại trà thượng hạng, Phúc Long luôn giữ gìn những hợp chất đặc biệt từ lá trà để làm nên tách trà đậm vị.<br/>
                    - Theanine (vị ngon) là cảm nhận được trạng thái tỉnh táo, tràn đầy năng lượng khi thưởng thức trà.<br/>
                    - Carbohydrate (vị ngọt) là đường tích trữ trong lá trà.<br/>
                    - Polyphenols (vị chát) là thành phần đặc biệt có nhiều trong lá trà non.<br/>
                    - Caffein (vị đắng) là thành phần bị ảnh hưởng bởi 2 yếu tố: nhiệt độ nước và cách ngâm. 
                    Để tiết chế caffein, khi pha nên dùng nước nhiệt độ vừa phải và giảm thời gian ngâm trà.<br/>
                    - Enzyme (men) là chất xúc tác sinh học thúc đẩy quá trình lên men của lá trà<br/>
                </div>
            </div>
            <div className="form-group item-right">
                <div className="col-ct-6">
                    <img src="../../img/trà-phúc-long-6'.jpg" alt="cà phê Phúc Long"/>
                </div>
                <div className="col-ct-6">
                Phúc Long thấu hiểu để có được một tách trà ngon thì từ quá trình thu hái lá trà cho
                 đến quá trình sao chế và pha trà cũng cần phải chuẩn xác. Khi sao trà cần phải canh lửa
                  vừa vặn, khi pha trà nhiệt độ nước cũng vừa phải. Để giờ đây, cầm trên tay tách trà 
                  ngát hương, nhâm nhi trọn vị trà truyền thống như là một cách thể hiện tâm tình đối 
                  với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, lòng an nhiên trước bao bộn bề.
                </div>
            </div>
   	 	</div>
		</div>
        );
    }
}
export default LeavesTea;