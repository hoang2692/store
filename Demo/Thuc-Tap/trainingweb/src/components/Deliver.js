import React, { Component } from 'react';
import '../App.css';


class Deliver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  openFrom = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    let { open } = this.state;
    return (
      <div className="container-fluid pt-1" style={{ backgroundColor: '#efefef' }}>
        <div className="container" style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}>
          <form className="form-DK">
            <h1>Thông tin khách hàng</h1>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label className='la' >Họ Tên <span>(*)</span></label>
                <input type="text" className="form-control" id="input1" />
              </div>

              <div className="form-group col-md-4">
                <label className='la'>Số điện thoại <span>(*)</span></label>
                <input type="text" className="form-control" id="input2" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4" >
                
                
              </div>
              <div className="form-group col-md-4">
                <label >Email  <span>(*)</span></label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
            </div>
          </form>
          <div className="form-group col-md-7">
          </div>
          <form className="form-DK">
            <p>Địa chỉ nhận hàng</p>
            <div className="row">
            <div className="form-group col-md-4">
            <label style={{ fontSize: '14px' }}>vui lòng tham khảo danh sách cửa hàng</label>
            <select id="inputState" className="form-control">
              <option >Chọn</option>
              <option >Phúc Long Bitexco</option>
              <option>Phúc Long Lê Văn Sỹ</option>
              <option >Phúc Long 188 Trần Hưng Đạo</option>
              <option>Phúc Long Lotte Mart Quận 7</option>
              <option >Phúc Long Aeon Mall Tân Bình</option>
              <option>Phúc Long Cộng Hòa</option>
              <option >Phúc Long Golden Plaza</option>
              <option>Phúc Long Nguyễn Thị Minh Khai</option>
              <option >Phúc Long 29 Ngô Đức Kế</option>
              <option>Phúc Long 42 Ngô Đức Kế</option>
              <option >Phúc Long Sư Vạn Hạnh</option>
              <option>Phúc Long Lotte Mart Quận 11</option>
              <option>Phúc Long LandMark81</option>
              <option >Phúc Long GiGaMail</option>
              <option>Phúc Long Tân Sơn Nhì</option>
              <option >Phúc Long Trần Quang Khải</option>
              <option>Phúc Long Vincom Nguyễn Chí Thanh</option>
              <option >Phúc Long SaiGon Centre</option>
              <option>Phúc Long Phổ Quang</option>
            </select>
          </div>
          <div className="form-group col-md-4">
                <label className='la' >Địa chỉ người nhận <span>(*)</span></label>
                <input type="text" className="form-control" id="input1" />
              </div>
            </div>
            
          </form>
          <div>
            <div style={{ borderTop: '1px solid #ddd' }} >
            <button style={{ marginTop: '50px', marginLeft: '100px', backgroundColor: '#0d713d', color: 'White' }} type="button" className="btn " >Quay lại</button>
              <button style={{ marginTop: '50px', marginLeft: '100px', backgroundColor: '#0d713d', color: 'White' }} type="button" className="btn " >Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Deliver;