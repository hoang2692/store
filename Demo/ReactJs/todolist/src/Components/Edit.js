import React, { Component } from 'react';

class Edit extends Component {
    emlemmen = () =>{
    let {arr1} = this.props;
    return arr1.map((level, index)=>{
        switch (level) {
            case 0:
                return <option key={index} value={level}>Low</option>
      
            case 1:
                return <option key={index} value={level}>Medium</option>
        
            default:
                return <option key={index} value={level}>High</option>
        }
    });}
    render() {
        let {nameEdit,levelEdit,indexEdit,cancel,setOnChangeName,setOnChangeLevel,setSave} = this.props;
        return (
          <tr>
          <td className="text-center">{indexEdit}</td>
          <td><input type="text" className="form-control" 
            defaultValue={nameEdit} 
            onChange={(event) => setOnChangeName(event.target.value)}/></td>
          <td className="text-center">
              <select className="form-control"  value={levelEdit} onChange={(event) => setOnChangeLevel(event.target.value)}>
                  {this.emlemmen()}
              </select>
          </td>
          <td>
              <button type="button" className="btn btn-default btn-sm" onClick={()=>cancel()}>Cancel</button>
              <button type="button" className="btn btn-success btn-sm" onClick={() => setSave()}>Save</button>
          </td>
      </tr>
          );
    }
}

export default Edit;