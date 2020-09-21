import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:'',
      name: '',
      status: false
    }
  }

  componentWillMount(){
    if(this.props.itemEditing && this.props.itemEditing.id !== null){
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
    }else this.onClear();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      });
    } else this.onClear();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]:value

    });
  }

  onSubmit = ( event ) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    this.props.onCloseForm();
    //console.log(this.state);
  }

  onClear = () =>{
    this.setState({
        name:'',
        status: false
    });
  }


  render(){
    var { id } = this.state;
    var {isDisplayForm} = this.props;
    if(!isDisplayForm) return null;
    return (
      <div>
        <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title ">
                      {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}  
                      <span className="fa fa-times-circle   "
                            onClick={ this.onCloseForm }
                      >
                        </span>
                    </h3>
                    
                  </div>

                  <div className="panel-body">
                    
                    <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <label>Tên :</label>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                  />
                              </div>
                              <label>Trạng Thái :</label>
                              <select 
                                className="form-control" 
                                required="required" 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                              >
                                  <option value={true}>Kích Hoạt</option>
                                  <option value={false}>Ẩn</option>
                              </select>
                              <br/>
                              <div className="text-center">
                                  <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                  <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={this.onClear}
                                  >
                                      Hủy Bỏ
                                  </button>
                              </div>
                      </form>
                    
                  </div>
              </div> 
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.edittingItem
  }
}

const mapDispatchtoProps = (dispatch,props) =>{
  return {
      onAddTask: (tasks) =>{
        dispatch(actions.addTask(tasks));
      },
      onCloseForm: () =>{
        dispatch(actions.closeForm())
      }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(TaskForm);
