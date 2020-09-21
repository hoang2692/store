import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import PublicRouter from './components/publicRouts.js'

class Routes extends React.Component {

  render() {

    return (
  
      <Switch>
        <Route path='/' component={ PublicRouter } />
      </Switch>
    );
  }
};

export default Routes;