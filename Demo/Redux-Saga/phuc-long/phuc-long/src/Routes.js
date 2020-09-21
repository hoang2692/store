import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import PublicRouter from './containers/public/PublicRouter'
import AdminRouter from './containers/admin/AdminRouter';

class Routes extends React.Component {

  render() {

    return (
  
      <Switch>
        <Route path='/' component={PublicRouter} />
        <Route path='/admin' component={AdminRouter} />
      </Switch>
    );
  }
};

export default Routes;

//switch chuyen component
// router tao duong dan
//path :lay duong dan
