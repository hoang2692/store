import React, { Component } from 'react';



class Sort extends Component {

  constructor(props){
    super(props);
    this.state={
      statusBanDau:'Name ASC'
    };}

    setStatus= (Status,sortName,sortValue) =>{
        this.setState({statusBanDau:Status})             
        this.props.onSort(sortName,sortValue)
    }

    render() {
    return (
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu">
            <li><a role="button" onClick={() => this.setStatus('Name ASC','name', 1)}>Name ASC</a></li>
            <li><a role="button" onClick={() => this.setStatus('Name DESC','name', -1)}>Name DESC</a></li>
            <li role="separator" className="divider"></li>
            <li><a role="button" onClick={() => this.setStatus('Level ASC','level', 1)}>Level ASC</a></li>
            <li><a role="button" onClick={() => this.setStatus('Level DESC','level', -1)}>Level DESC</a></li>
          </ul>
          <span className="label label-success label-medium">{this.state.statusBanDau}</span>
        </div>
          );
    }
}

export default Sort;