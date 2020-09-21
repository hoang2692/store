import React,{Component} from 'react';



class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state={
      colors:['red','blue','green','pink']
    };}
  showColor(color){
          return {
            backgroundColor :color
  }};
  setActiveColor(color){
    this.props.onRecive(color)
  }
  render(){
    var elementColor=this.state.colors.map((color,index) =>{
      return <span key={index} style={this.showColor(color)}
              className={this.props.color === color ? 'active' : ''}
              onClick = {() => this.setActiveColor(color)}
              ></span>
    });
  return (
        <div className="col-sm-6">
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">Color Picker</div>
            <div className="card-body text-success">
                {elementColor}
            </div>
          </div>
        </div>
  );}
}

export default ColorPicker;