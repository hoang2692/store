import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import ThucUong from './../components/ThucUong';
import ThucUongSanPham from './../components/thucuongsanpham';



class ThucUongContainer extends Component {
    render() {
        var {sanPham} = this.props;
        return (
                <ThucUong>
                    {this.showSanPham(sanPham)}
                </ThucUong>
        );
    }

    showSanPham(sanPham){
        var result= null;
        if(sanPham.length > 0)
        {
            result = sanPham.map((Sanpham,index) =>{
                return <ThucUongSanPham key={index} Sanpham={Sanpham} onAddCart={this.props.onAddCart}/>
            })
        }
        return result;
    }

}


const mapStatetoProps = (state) =>{
    return {
        sanPham: state.ThucUong
    }
}

const mapDisptachtoProps = (dispatch,props) =>{
    return {
        onAddCart: (sanPham) =>{
            dispatch(actions.addCart(sanPham,1))
        }
    }
}


export default connect(mapStatetoProps,mapDisptachtoProps)(ThucUongContainer);
