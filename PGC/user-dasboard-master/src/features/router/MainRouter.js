import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivatedRoute from "./PrivateRoute";
import ProfilePage from "../profile";
import LoginPage from "../login/viewModel";
import RegisterPage from "../register/viewModel";
import VerifyEmailPage from "../verifyEmail/viewModel";
import ResetPassWordPage from "../resetPassword/viewModel";

import LandingPage from "../landing/viewModel";
import HomeRouter from "./HomeRouter";

import { routes } from ".";

export default function initialRouter() {
  return (
    <Router>
      <Switch>
        {/* public route */}
        <Redirect path="/" to={routes.landing} exact />
        <Route path={routes.landing}>
          <LandingPage />
        </Route>
        <Route path={routes.login}>
          <LoginPage />
        </Route>
        <Route path={routes.register}>
          <RegisterPage />
        </Route>
        <Route path={routes.verifyEmail}>
          <VerifyEmailPage path={routes.verifyEmail}/>
        </Route>
        <Route path={routes.resetPassword}>
          <ResetPassWordPage path={routes.resetPassword}/>
        </Route>
        {/* protected route */}
        <PrivatedRoute path={routes.home}>
          <HomeRouter />
        </PrivatedRoute>
        <PrivatedRoute path={routes.profile}>
          <ProfilePage />
        </PrivatedRoute>
      </Switch>
    </Router>
  );
}
