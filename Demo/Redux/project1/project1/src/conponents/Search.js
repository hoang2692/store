import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChange = (event)=> {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState ({
      [name] : value
    });
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }



  render(){
    var { keyword } = this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
            <div className="input-group">
            <input 
                name="keyword"
                type ="text"
                className="form-control"
                placeholder="Nhập từ khóa: "
                value={ keyword }
                onChange={this.onChange}
            />

            <span className="input-group-btn">
                <button 
                  className="btn btn-primary" 
                  type="button"
                  onClick = {this.onSearch}
                >
                <span 
                  className="fa fa-search mr-5"
                  
                > </span>
                Tìm kiếm
                </button>
            </span>

            </div>
        </div>
    );
  }
}

const mapstatetopProps = (state) =>{
  return{}
}

const mapDispatchtoProps = (dispatch,props) =>{
  return {
    onSearch: (keyword) =>{
      dispatch(actions.search(keyword))
    }
  }
}
export default connect(mapstatetopProps,mapDispatchtoProps)(Search);
