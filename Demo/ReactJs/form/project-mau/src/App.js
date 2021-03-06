import React, { Component } from 'react';
import './App.css';
import TaskFrom from './components/Taskfrom';
import Constrol from './components/Constrol';
import Tasklist from "./components/TaskList";

class App extends Component {
  render(){
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskFrom />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            <span className="fa fa-plus mr-5" />
              Thêm Công Việc
          </button>
          <Constrol />
        <div className="row mt-15">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Tasklist />
          </div>
        </div>
        </div>
      </div>
    </div>

  );}
}

export default App;
