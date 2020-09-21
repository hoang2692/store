import React, { Component } from 'react';
import './App.css';
import TaskForm from './conponents/TaskForm';
import Control from './conponents/Control';
import TaskList from './conponents/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

  onToggleForm = () =>{
    if(this.props.itemEditing && this.props.itemEditing.id!== '')
    {
      this.props.onOpen();
    }else{
      this.props.onToggleForm()
    }
    this.props.onEditting(
      {
        id: '',
        name: '',
        status:  false
      }
    );
  }
  onCloseForm = () =>{
    this.setState ({
      isDisplayForm : false
    });
  }
  onShowForm = () => {
    this.setState ({
      isDisplayForm:true
    });
  }

    onSort = (sortBy,sortValue) => {
      this.setState({
        sortBy:sortBy,
        sortValue:sortValue
      }); 
    }
  render(){
    var {isDisplayForm} = this.props;
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản lý công việc</h1>
          </div>
          
          <div className="row">
            
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
              {/* form thứ nhất tại đây */}
              <TaskForm /> 
            </div>

            {/* Nút thêm công việc  */}
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick ={ this.onToggleForm }
              >
                  <span className="fa fa-plus mr-5"  ></span> Thêm công việc
                </button>
               {/* <button type="button" className="btn btn-danger ml-5"
                        onClick={ this.onGenerateData}>
                  <span className="fa fa-plus mr-5"  ></span> Generate Data
                </button>*/}

               
                
                  <Control 
                  />


                <TaskList 

                />

                
                
                
                
                
            </div>
            
            
          </div>
          
        </div>

        
        
        
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.edittingItem
  }
}

const mapDispatchtopProps = (dispatch,props) =>{
  return {
    onToggleForm : () => {
        dispatch(actions.toggleForm())
    },
    onEditting: (task) =>{
      dispatch(actions.edditItem(task))
    },
    onOpen: () =>{
      dispatch(actions.openForm())
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtopProps)(App);
