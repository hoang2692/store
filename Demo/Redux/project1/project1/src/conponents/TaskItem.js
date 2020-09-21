import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus( this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete( this.props.task.id);
    }

    onUpdate = () => {
        // this.props.onUpdate( this.props.task.id);
        this.props.onEditting(this.props.task);
        this.props.onOpen();
    }

    
  render(){
      var {task, index} = this.props;
    return (
        <tr>
            <td>{index +1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className={task.status === true ?"label label-success":"label label-danger"}
                        onClick={this.onUpdateStatus}
                >
                            {task.status === true ? 'kích hoạt': 'ẩn'}
                        </span>
            </td>
            <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick= { this.onUpdate}
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick = { this.onDelete }
                >
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
  }
}

const mapStatetoProps = (state) =>{
    return {}
}

const mapDispatchtoProps = (dispatch,props) =>{
    return {
        onUpdateStatus: (id) =>{
            dispatch(actions.unpdatestatus(id))
        },
        onDelete: (id) =>{
            dispatch(actions.delateItem(id))
        },
        onOpen: () =>{
            dispatch(actions.openForm())
        },
        onEditting: (task) =>{
            dispatch(actions.edditItem(task))
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(TaskItem);
