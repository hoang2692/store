import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

class AdminRouter extends React.Component {

  render() {

    return (
      <div id="wrapper">
        {/* viet menu */}
        {/* viet menu */}
        <Switch>
          <Route path='/admin' render={() => (<div>admin</div>)} />
        </Switch>
      </div>

    );
  }
};

export default AdminRouter;