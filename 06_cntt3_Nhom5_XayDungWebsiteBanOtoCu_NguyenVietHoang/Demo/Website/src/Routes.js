import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PublicRouter } from './containers/public'
import { AdminRouter } from './containers/admin';

class Routes extends React.Component {

  render() {

    return (
  
      <Switch>
        <Route path='/admin' component={ AdminRouter } />
        <Route path='/' component={ PublicRouter } />
      </Switch>
    );
  }
};

export default Routes;

//switch chuyen component
// router tao duong dan
//path :lay duong dan
