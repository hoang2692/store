import React, { Component } from 'react';

class Search extends Component {
    
    constructor(props) {
      super(props);
      this.state={
        inputsearch: ''
      }
    }
    
    onChange = (event) =>{
      var target=event.target;
      var name=target.name;
      var value=target.value;
      this.setState({
        [name] : value
      })
      this.props.change(value)
    }

    clear = () =>{
      this.setState({inputsearch: ''})
    }

    render() {
        return (
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search item name"  
                        name="inputsearch"
                        value={this.state.inputsearch}
                        onChange ={this.onChange}/>
                      <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={this.clear}>
                          Clear
                        </button>
                      </span>
                    </div>
          );
    }
}

export default Search;