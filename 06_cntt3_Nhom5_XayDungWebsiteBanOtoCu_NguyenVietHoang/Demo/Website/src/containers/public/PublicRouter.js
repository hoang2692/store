import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';
import cart from "./Cart/cart";

class PublicRouter extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <NavBar />
        <Switch>
          <Route path="/" exact  component={HomePage} />
          <Route path="/cart" exact  component={cart} />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default withRouter(PublicRouter);
