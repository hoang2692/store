import React,{Component} from 'react';
import '../App.css';
class Title extends Component {
  render(){
  return (
    <div className="row">
        <div className="col-md-1 col-12 pd">
          
        </div>
        <div className="col-md-3 col-12 pd">
            <h1>Any Money</h1>
        </div>
        <div className="col-md-1 col-12 pd">
        <img src='././img/transfer.png' style={{height: "60px",width: "50px"}}></img>
        </div>
        <div className="col-md-2 col-12 pd">
            <h1>Opay</h1>
        </div>
        <div className="col-md-1 col-12 pd">
        <img src='././img/transfer.png' style={{height: "60px",width: "50px"}}></img>
        </div>
        <div className="col-md-3 col-12 pd">
            <div className="col-md-4 col-12"></div>
            <h1>Any Money</h1> 
        </div>
        <div className="col-md-1 col-12 pd">
          
        </div>
    </div>
  );}
}

export default Title;