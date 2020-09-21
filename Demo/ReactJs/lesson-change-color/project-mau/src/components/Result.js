import React,{Component} from 'react';
import '../App.css';

class Result extends Component {
  setStyle(){
    return{
      color: this.props.color,
      bodercolor: this.props.color,
      fontSize: this.props.frontsize
    }
  }
  render(){
  return (
        <div className="col md-12 mt-3">
            <a>Color: {this.props.color} - FrontSize: {this.props.frontsize}px</a>
            <div className="contents mt-1" style={this.setStyle()}>
              Nội dung setting
            </div>
        </div>
  );}
}

export default Result;