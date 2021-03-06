import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ItemTest extends Component {

  componentDidMount(){
    this.props.getDataAdmin();
    this.props.getEditData();
  }

  

  _onDelete = (id) =>{
    this.props.deleteProducts(id);  
  }


  _onEditProduct = (id) =>{
    console.log("idComponent", id)
    this.props.getEditData(id);
  }

  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((e, index) => {
          return (
            <tr key={index}>
              <td className="text-center" style={{ textAlign: "center" }}>
                {index +1}
              </td>
              <td style={{ textAlign: "center" }}>Null</td>
              <td style={{ textAlign: "center" }}>{e.category_id}</td>
              <td style={{ textAlign: "center" }}>{e.name}</td>
              <td style={{ textAlign: "center" }}>{e.content}</td>
              <td style={{ textAlign: "center" }}>{e.price}</td>
              <td className="row">
                <Link to={`/admin/quanlysanpham/${e.id}/add`} type="button" className="btn btn-sm mr-2 btn-items" onClick={() => this._onEditProduct(e.id)}>
                  Edit
                </Link>
                <button type="button" className="btn btn-sm btn-items" onClick= {() => this._onDelete(e.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
const mapStateToProps = (state) => {
  return {
   data: state.productsAdmin.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataAdmin: () => dispatch({ type: "PRODUCT_GET_ADMIN_REQUEST" }),
    deleteProducts: (id) => dispatch({type:"PRODUCT_DELETE_REQUEST", id:id}),
    getEditData: (id) => dispatch({ type: "PRODUCT_GET_EDIT_DATA_REQUEST", id:id})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemTest);
