import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AdminHome from './UI/index';
import login from "./UI/login/login";
import PrivateRouter from './PrivateRouter';
import {connect} from 'react-redux';

class AdminRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRouter path="/admin" exact redirect="/admin/login" signedIn={this.props.isLogin ? true : false} component={AdminHome} />
          <Route path="/admin/login" exact history component={login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
