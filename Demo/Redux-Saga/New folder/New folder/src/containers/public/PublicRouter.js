import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navmenu from "../hearder_footer/Navmenu";
import Footer from "../hearder_footer/footer";
import HomePage from "../homePage/Home";
import Drink from "../foodTable/Drink/Drink";
import Login from "../Login/Login";
import   "../../App.css"
import Cart from "../Cart/cart";
class PublicRouter extends React.Component {
  render() {
    return (
      <div>
        <Navmenu />
        <Switch>
          <Route path="/" exact  component={HomePage} />
          <Route path="/foodTable/:id" component={Drink} />
          <Route path="/danhnhap/login" component={Login} />
          <Route path="/cart/bill" component={Cart} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(PublicRouter);
