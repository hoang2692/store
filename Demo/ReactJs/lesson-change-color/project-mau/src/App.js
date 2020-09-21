import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';




class App extends Component {

  constructor(props){
    super(props);
    this.state={
      color:'red',
      frontsize:15
    }
    this.onSetColor=this.onSetColor.bind(this);
  }
  onSetColor(reciveColor){
    this.setState({
      color:reciveColor
    });
  }
  onSetSize = (size) =>{
    if(this.state.frontsize + size >=8 && this.state.frontsize + size <=36)
    {
    this.setState({frontsize: this.state.frontsize + size})
    }
  }
  setReset = (DF) => {
    this.setState({color:'red',
    frontsize:15})
  }

  render(){
  return (
    <div className="container mt-5">
      <div className="row">
        <ColorPicker color={this.state.color} onRecive={this.onSetColor}/>
        <div className="col-sm-6">
          <SizeSetting frontsize={this.state.frontsize} changeSizeRecive={this.onSetSize} />
          <Reset setReset={this.setReset}/>
        </div>
        <Result color={this.state.color} frontsize={this.state.frontsize}/>
      </div>
    </div>

  );}
}

export default App;
 