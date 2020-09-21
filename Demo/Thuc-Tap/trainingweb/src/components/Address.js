import React, { Component } from 'react';
import '../App.css';
class Address extends Component {


    render() {
        return (
            <div>
                <div className="row address-color info__list">
                    <div className=" col-xs-12 col-md-8">
                        <h1 className=".heading">Hệ thống cửa hàng</h1>
                        <div className="map-chose row">
                            <div className="form-group ">
                                <div className="btn-group bootstrap-select">
                                    <select
                                        className=" select-width btn dropdown-toggle btn-default dropdown-button "
                                    >
                                        <option value='0'>Tỉnh/Thành Phố</option>
                                        <option value='1'>Hồ Chí Minh</option>
                                        <option value='2'>Khánh Hòa</option>
                                        <option value='3'>Đồng Nai</option>
                                        <option value='4'>Cần Thơ</option>
                                        <option value='5'>Bình Dương</option>
                                        <option value='6'>Đà Nẵng </option>
                                        <option value='7'>Hà Nội</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="btn-group bootstrap-select">
                                    <select
                                        className="select-width btn dropdown-toggle btn-default dropdown-button "
                                    >
                                        <option>Q1</option>
                                        <option>Q2</option>
                                        <option>Q3</option>
                                        <option>Q4</option>
                                        <option>Q5</option>
                                        <option>Q6</option>
                                        <option>Q7 </option>
                                        <option>Q8</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <h4>Địa chỉ cửa hàng</h4>
                        <ul className="map-list-store">
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                            <li className="map-list-store li">
                                <p>1</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Address;
