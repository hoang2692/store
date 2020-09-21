import React,{Component} from 'react';

class SizeSetting extends Component {

  changeSize = (size) =>{
    this.props.changeSizeRecive(size)
  }

  render(){
  return (
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">Size : {this.props.frontsize}px</div>
            <div className="card-body text-success">
              <a className="btn btn-warning" onClick={() => {this.changeSize(-2)}}>Giảm</a>
              <a className="btn btn-danger ml-1" onClick={() => {this.changeSize(2)}}>Tăng</a>
            </div>
          </div>

  );}
}

export default SizeSetting;