import React, { Component } from 'react';
import '../App.css';


class Dangky extends Component {
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
            Thông tin người nhận hàng
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
                <div>
                  <label >Ngày Sinh  <span>(*)</span></label>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <select id="inputState" className="form-control" >
                      <option >Ngày</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>

                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <select id="inputState" className="form-control">
                      <option  >Tháng</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <select id="inputState" className="form-control">
                      <option >Năm</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label >Email  <span>(*)</span></label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
            </div>
          </form>
          <div className="form-group col-md-7">
            <span className="from-text"> <i>(Số điện thoại, ngày sinh nhật và địa chỉ email sau khi tạo tài khoản sẽ không thể thay đổi,
            vui lòng liên hệ bộ phận CSKH ủa chúng tôi tại
                                <b className="b">(+84 28) 6263 0377 - 78 </b>
                                (số máy lẻ <b className="b">604</b>)
                                nếu bạn có bất kỳ thắc mắc nào.)</i></span>
          </div>
          <form className="form-DK">
            <p>Địa chỉ liên hệ</p>
            <div className="row">
              <div className="form-group col-md-4">
                <label >Tỉnh/Thành phố<span>(*)</span></label>
                <select id="inputState" className="form-control">
                  <option ></option>
                  <option>...</option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label >Quận/Huyện<span>(*)</span></label>
                <select id="inputState" className="form-control">
                  <option ></option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="mr-sm-2">Mật khẩu<span>(*)</span></label>
                <input type="password" className="form-control mb-2 mr-sm-2" />
              </div>
              <div className="form-group col-md-4">
                <label className="mr-sm-2">Nhập lại mật khẩu<span>(*)</span></label>
                <input type="password" className="form-control mb-2 mr-sm-2" />
              </div>
              <div className="form-group col-md-12">
                <h2 className="h2"> Các thông tin khác</h2>
                <p className="from-text1">(Các thông tin dưới đây là không bắt buộc, nhưng nhờ vào thông tin này, chúng tôi sẽ gởi những ưu đãi phù hợp với bạn nhất )</p>
              </div>
            </div>
          </form>
          <div>
            {open ?
              <form className="form-DK pb-4" >
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label style={{ fontSize: '14px' }}>Bạn đang làm:</label>
                    <select id="inputState" className="form-control">
                      <option >--</option>
                      <option>Học sinh</option>
                      <option>Nhân viên</option>
                      <option>Chuyên viên</option>
                      <option>Quản lý</option>
                      <option>Cán bộ</option>
                    </select>
                  </div>

                  <div className="form-group col-md-8">
                    <label style={{ fontSize: '14px', margin: '3px' }}>Thu nhập hàng tháng của bạn là:</label>
                    <div className="form-row">
                      <div className="text-check col-md-4">
                        <div>
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label"  > Dưới 3 triệu</label>
                        </div>
                        <div>
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label" > từ 8-12 triệu </label>
                        </div>
                      </div>
                      <div className="text-check col-md-4">
                        <div>
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label" > từ 3-5 triệu</label>
                        </div>
                        <div>
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label" > trên 12 triệu</label>
                        </div>
                      </div>
                      <div className="text-check col-md-4">
                        <div>
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label" >từ 5-8 triêu</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label style={{ fontSize: '14px' }}>Các cửa hàng phúc long bạn yêu thích là:</label>
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
                    <label style={{ fontSize: '14px' }}>Món nước bạn yêu thích là:</label>
                    <input type="text" className="form-control" id="input1" />
                  </div>
                </div>
              </form> : ''}
            <div style={{ textAlign: 'center', borderTop: '1px solid #ddd' }}>
              <button onClick={this.openFrom} type="button" className="btn btn-default" style={{ position: 'relative', top: '-20px', border: '1px solid #ddd', backgroundColor: 'white' }} >{open ? 'Ẩn' : 'Hiển thị'}</button>
            </div>

            <div className="form-group  ">
              <p className="from-text1 col-md-12">
                Khi bấm Hoàn tất Đăng ký Thẻ Thành viên Phúc Long, bạn đồng ý bị ràng buộc bởi những Điều khoản & Điều kiện sử dụng này và tất cả các Điều khoản được kết hợp bằng việc tham chiếu
              </p>
              <div style={{ marginLeft: '15px' }}>
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" > Đồng ý nhận thư từ chúng tôi.</label>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #ddd' }} >
              <button style={{ marginTop: '50px', marginLeft: '100px', backgroundColor: '#0d713d', color: 'White' }} type="button" className="btn " >HOÀN TẤT ĐĂNG KÝ</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Dangky;