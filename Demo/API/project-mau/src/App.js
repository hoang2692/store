import React, { Component } from 'react';
import Menu from './components/Menu/menu';
import routs from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  showrouts(routes){
    var result= null;
    result= routes.map((rout,index) => {
      return <Route key={index} path={rout.path} main={rout.main} exact={rout.exact} component={rout.main} />
    })
    return <Switch>{result}</Switch>;
  }

  render(){
  return (
    <Router>
    <div>
        <Menu />
        {this.showrouts(routs)}
    </div>
    </Router>
  );}
}


export default (App);
