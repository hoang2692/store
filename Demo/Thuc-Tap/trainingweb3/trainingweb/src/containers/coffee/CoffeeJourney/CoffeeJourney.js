import React, { Component } from "react";

import "../../../App.css";
import Images from "../../../assets/images";

export default class CoffeeJourney extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          style={{ width: "100%" }}
          src={Images.coffeeJourney_1}
          alt="cà phê"
        ></img>
        <div
          className="container-fluid pt-1"
          style={{ backgroundColor: "#white" }}
        >
          <div className="row align-items-center">
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <div className="page-heading">
                <ul
                  className="breadcrumb"
                  aria-label="breadcrumbs"
                  style={{ justifyContent: "center" }}
                >
                  <li>
                    <a href="true">Trang chủ</a>
                  </li>
                  <li className="active">
                    <a href="true">/Hành trình của tách cà phê đậm vị</a>
                  </li>
                </ul>
                <h1>Hạt cà phê Phúc Long</h1>
                <div>
                  <img src={Images.coffeeJourney_2} alt="icon_latra" />
                </div>
              </div>
            </div>
            <div
              className="row align-items-center"
              style={{ justifyContent: "center" }}
            >
              <div className="col-md-6" style={{ textAlign: "center" }}>
                <p>
                  Phúc Long sẽ luôn luôn đồng hành cùng bạn trên hành trình tìm
                  kiếm những hạt cà phê ngon nhất, rang chúng cho đến mức hoàn
                  hảo. Và chúng tôi vẫn đang thực hiện công việc đó hàng ngày,
                  tôn trọng nguyên bản cho tách cà phê đậm vị, thuần chất Việt.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5" style={{ alignItems: "center" }}>
            <div
              className="col-lg-6"
              style={{ marginBottom: 15, marginTop: 15 }}
            >
              <h2
                style={{ color: "#171347", fontWeight: 700, marginBottom: 20 }}
              >
                Tinh khiết từ nguồn gốc
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#758499",
                }}
              >
                Nuôi dưỡng sự thuần vị trong từng tách cà phê, Phúc Long đã
                không ngừng tìm kiếm và chọn lọc từ những giống cà phê Arabica,
                Robusta tốt nhất. Tiên phong trong việc cung cấp cà phê tươi
                được đóng gói tại nơi thu hoạch đến tận tay người thưởng thức.
                Chúng tôi biết rằng chất lượng của cà phê đầu tiên được xác định
                bằng ba yếu tố cốt lõi: giống cây trồng, điều kiện đất trồng và
                độ cao của vùng. Và hơn ai hết, chúng tôi hiểu rằng nguồn gốc
                tinh khiết là yếu tố quan trọng nhất để giữ gìn hương vị đậm đà
                của cà phê.
              </p>
            </div>
            <div className="col-lg-6 " style={{ textAlign: "center" }}>
              <div className="bannertext">
                <img
                  src={Images.coffeeJourney_3}
                  alt="banner"
                  style={{ width: 555, height: 320 }}
                />
              </div>
            </div>
          </div>

          <div className="row pt-5" style={{ alignItems: "center" }}>
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <div className="bannertext">
                <img
                  src={Images.coffeeJourney_4}
                  alt="banner"
                  style={{ width: 555, height: 320 }}
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ marginBottom: 15, marginTop: 15 }}
            >
              <h2
                style={{ color: "#171347", fontWeight: 700, marginBottom: 20 }}
              >
                Giữ gìn đặc tính thượng hạng của hạt cà phê
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#758499",
                }}
              >
                Trân trọng giá trị truyền thống và giữ gìn đặc tính thượng hạng
                của hạt cà phê, hầu hết các công đoạn trong quy trình sản xuất
                đều được Phúc Long thực hiện thủ công. Tất cả được tuân thủ
                nghiêm ngặt đòi hỏi sự hoàn hảo từ bước khởi đầu.
              </p>
            </div>
          </div>

          <div className="row pt-5" style={{ alignItems: "center" }}>
            <div
              className="col-lg-6"
              style={{ marginBottom: 15, marginTop: 15 }}
            >
              <h2
                style={{ color: "#171347", fontWeight: 700, marginBottom: 20 }}
              >
                Tôn trọng nguyên bản cho tách cà phê đậm vị
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#758499",
                }}
              >
                Phúc Long sẽ luôn luôn đồng hành cùng bạn trên hành trình tìm
                kiếm những hạt cà phê ngon nhất, rang chúng cho đến mức hoàn
                hảo. Và chúng tôi vẫn đang thực hiện công việc đó hàng ngày, tôn
                trọng nguyên bản cho tách cà phê đậm vị, thuần chất Việt.
              </p>
            </div>
            <div className="col-lg-6 " style={{ textAlign: "center" }}>
              <div className="bannertext">
                <img
                  src={Images.coffeeJourney_5}
                  alt="banner"
                  style={{ width: 555, height: 320 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
