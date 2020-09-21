import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {

  constructor(props){
    super(props);
    this.state={
      id: '',
      txtname: ''
    }
  }

  componentDidMount(){
    this.props.onGetData();
    this.props.getData();
  }

  UNSAFE_componentWillReceiveProps(nextprops){
    if(nextprops && nextprops.dataEdit)
    {
        var {dataEdit} = nextprops;
        this.setState({
          id: dataEdit.id,
          txtname: dataEdit.name,
        })
    }
  }
 
    
  _onCreate = () => {
    var data = {
      id: this.state.id,
      name: this.state.txtname
    }
    if(this.state.id)
    {
      this.props.getUpdate(data)
    }else
    {
      this.props.getDatatoSubmit(this.state.txtname);
    }
    this.setState({txtname: ''})
  };


  _onChangeText = (evt) => {
    var target = evt.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }

  render() {
    return (
      
        <form className="form" >
        <div className="row" style={{justifyContent: 'center'}}>
        <div className="form-group" style={{width: "450px", margin: '5px'}}>
            <input 
            type="text" 
            className="form-control" 
            name="txtname"
            value={this.state.txtname} 
            onChange={this._onChangeText}
            placeholder= "Item Name" 
            required />
            
        </div>
        </div>
        <div className="row" style={{paddingTop: '5px', position: 'absolute', right: '25px'}}>
        <button
            style={{ color: "white", backgroundColor: "green",textAlign: 'right',alignItems: 'right'}}
            type="submit"
            onClick={this._onCreate}
            className="btn mr-2"
            >
            Submit
        </button>
        <button
            style={{ color: "white", backgroundColor: "red" }}
            type=""
            className="btn"
            >
            Cancel
        </button>
        </div>
    </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataEdit: state.cateEdit.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    getData: () => dispatch({ type: "CATE_GET_REQUEST" }),
    onGetData: () => dispatch({type: "CATE_GET_EDIT_REQUEST"}),
    getDatatoSubmit: (cate) =>dispatch({ type: "CATE_SUBMIT_REQUEST", cate: cate }),
    getUpdate: (data) =>dispatch({type: "CATE_UPDATE_EDIT_REQUEST", data: data})
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
