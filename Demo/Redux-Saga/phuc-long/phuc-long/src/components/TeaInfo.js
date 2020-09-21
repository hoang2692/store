import React, { Component } from 'react';
import '../App.css';


class Hanhtrinh_tra extends Component {
    render() {
        return (
            <div className="container-fluid pt-1" style={{ backgroundColor: '#white' }}>
                <div className="row align-items-center">
                    <div className='col-md-12' style={{ textAlign: 'center' }}>
                        <img style={{ width: '100%', height: '300px' }} src="../../image/tra1.jpg" alt="trà"></img>
                        <div className="page-heading">
                            <ul className="breadcrumb" aria-label="breadcrumbs" style={{ justifyContent: 'center' }} >
                                <li><a href="true">Trang chủ</a></li>
                                <li className="active"><a href="true">/Hành trình của tách trà đậm vị</a></li>
                            </ul>
                            <h1 >HÀNH TRÌNH CỦA TÁCH TRÀ ĐẬM VỊ</h1>
                            <div>
                                <img src="../../image/latra.png" alt="icon_latra" />
                            </div>
                    </div>
                    </div>
                    <div className="row align-items-center" style={{ justifyContent: 'center' }}>
                    <div className='col-md-6' style={{ textAlign: 'center' }}>
                            <p>
                            Xuyên suốt hơn nửa thế kỷ qua, từ những mầm trà chúng tôi tạo ra niềm đam mê, 
                            với sự nỗ lực không ngừng nghỉ trong từng ngày, Phúc Long đã có thể mang đến cho bạn tách trà đậm vị. 
                            Trên hành trình tôn trọng bản sắc trà, Phúc Long đảm bảo tận dụng hết những tính năng của trà để có thể hoà quyện cả hương lẫn vị.
                            Những lá trà thượng hạng sau khi thu hoạch được xử lý sạch, làm héo, phơi/ sấy khô, cho vào máy cắt, vò và nghiền. Tiếp đến, 
                            trà được sàng lọc, cho đến khi đủ kích thước tiêu chuẩn để lên men. Sau quá trình lên men,trà được đưa đi sấy khô lần nữa,
                            ướp hương và đóng gói.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5" style={{ alignItems: "center" }}>
                    <div className="col-lg-6" style={{ marginBottom: 15, marginTop: 15 }}>
                        <h2 style={{ color: "#000000", fontWeight: 700, marginBottom: 20 }}>
                        Nguồn gốc tinh khiết quyết định hương vị tươi nguyên
                        </h2>
                        <p style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#758499" }}>
                        Trà Phúc Long có nguồn gốc tinh khiết từ hai đồi chè do chúng tôi sở hữu tại Thái Nguyên và Bảo Lộc,
                        hai nơi này cũng được xem là lãnh thổ trà trứ danh của Việt Nam. Sở dĩ Trà Phúc Long mang đặc tính thượng hạng từ hương thơm,
                        mùi vị đến độ đậm là do trong quá trình vun trồng chúng tôi đặc biệt chú trọng hai yếu tố:
                        điều kiện thiên nhiên và thổ nhưỡng. Bên cạnh đó, độ tươi nguyên là yếu tố quan trọng để đánh giá chất lượng trà. 
                        Chính vì vậy, để giữ gìn độ tươi nguyên, chúng tôi đã xây dựng nhà máy tại hai đồi chè,
                        đảm bảo trà được sấy khô ngay sau khi thu hoạch
                        </p>
                    </div>
                    <div className="col-lg-6 " style={{textAlign: 'center' }}>
                        <div className="bannertext">
                            <img
                                src="../../image/tra2.jpg"
                                alt="banner"
                                style={{ width: 555, height: 320 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row pt-5"  style={{ alignItems: "center" }}>
                    
                    <div className="col-lg-6" style={{textAlign: 'center' }}>
                        <div className="bannertext">
                            <img
                                src="../../image/tra3.jpg"
                                alt="banner"
                                style={{ width: 555, height: 320 }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ marginBottom: 15, marginTop: 15 }}>
                        <h2 style={{ color: "#000000", fontWeight: 700, marginBottom: 20 }}>
                        Đậm vị trà truyền thống
                         </h2>
                        <p style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#758499" }}>
                        Nuôi dưỡng sự tự nhiên trong trà, Phúc Long chú trọng sản xuất bằng phương pháp thủ công truyền thống. 
                        Tuy rằng phương pháp này luôn đòi hỏi trình độ cao và sự hoàn hảo ở tất cả các khâu, không được có bất kỳ sai sót, 
                        từ giai đoạn khởi đầu tuyển chọn nghiêm ngặt hái một búp và hai lá non đến giai đoạn đóng gói thành phẩm, 
                        nhưng để giữ gìn đặc tính thượng hạng của trà, chúng tôi sẵn sàng ưu tiên lựa chọn.
                     </p>
                    </div>
                </div>

                <div className="row pt-5" style={{ alignItems: "center" }}>
                    <div className="col-lg-6" style={{ marginBottom: 15, marginTop: 15 }}>
                        <h2 style={{ color: "#000000", fontWeight: 700, marginBottom: 20 }}>
                        Tôn trọng nguyên bản cho tách trà đậm vị
                        </h2>
                        <p style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#758499" }}>
                        Tiên phong trong việc cung cấp trà tươi đóng gói tại nơi thu hoạch đến tận tay người thưởng thức, 
                        Phúc Long đã và đang không ngừng tìm kiếm những giống trà hảo hạng, không ngừng tìm tòi - cải tiến 
                        phương pháp sản xuất để cho ra đời sản phẩm thuần vị. Xuyên suốt quá trình tôn trọng nguyên bản 
                        cho tách trà đậm vị hơn nửa thế kỷ qua, chúng tôi hân hoan nhận ra rằng: bảo tồn di sản trà cũng chính là bảo tồn văn hoá Việt.</p>
                    </div>
                    <div className="col-lg-6 " style={{textAlign: 'center' }}>
                        <div className="bannertext">
                            <img
                                src="../../image/tra4.jpg"
                                alt="banner"
                                style={{ width: 555, height: 320 }}
                            />
                        </div>
                    </div>
                </div>
                </div>

        )
    }
}

export default Hanhtrinh_tra;
