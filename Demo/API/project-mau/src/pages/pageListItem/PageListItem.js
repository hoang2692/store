import React, { Component } from 'react';
import List from '../../components/List/list';
import ListItem from '../../components/ListItem/listItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/index';


class PageListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      product: []
    }
  }

  componentDidMount(){
      this.props.onFetchApi()}

  onDelete = (id) =>{
    this.props.onDelete(id)
  }

  
  render(){
    var {product} = this.props;
  return (
      <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-12 col-12 col-12">
          <Link to="/product/add" type="button" className="btn btn-primary mb-3">Thêm công việc</Link>
          <List product={product}>
            {this.showproductItem(product)}
          </List>
      </div>
      </div>
      </div>
  );}

  showproductItem(product){
    var result = null;
      result=product.map((product,index) =>{
        return <ListItem key={index} index={index + 1} product={product} onDelete={this.onDelete}/>
      })
    return result;
  }
}

const mapStatetoProps = (state) =>{
  return {
    product: state.ApiProducts
  }
}

const mapDispatchtoProps = (dispatch,props) =>{
  return {
    onFetchApi: () =>{
      dispatch(actions.fetchApiRequest())
    },
    onDelete: (id) =>{
      dispatch(actions.delateItemRequest(id))
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PageListItem);

