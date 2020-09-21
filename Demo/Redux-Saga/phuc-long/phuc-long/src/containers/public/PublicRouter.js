import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Navmenu from "../../components/Navmenu";
import Footer from "../../components/footer";
import HomePage from "../homePage/Home";
import CoffeeInfo from "../cafe/CaffeeInfo/CoffeeInfo";
import TeaInfo from "../cafe/TeaInfo/TeaInfo";
import TeaWalkInfo from "../Tea/TeaWalkInfo/TeaWalkInfo";
import LeavesTea from "../Tea/leavesTea/leavesTea";
import Drink from "../foodTable/Drink/Drink";
import Cake from "../foodTable/Cake/cake";
import DessertCake from "../foodTable/dessertCake/dessertCake";
import Login from "../Login/Login";
import Regist from "../Regist/Regist"
import   "../../App.css"



class PublicRouter extends React.Component {
  render() {
    return (
      <div>
        <Navmenu />
        <Switch>
          <Route exact path="/"  component={HomePage} />
          <Route path="/cafe/hanhtrinh_cf" component={CoffeeInfo} />
          <Route path="/cafe/hat_cf" component={TeaInfo} />
          <Route path="/cafe/hanhtrinh_tra" component={TeaWalkInfo} />
          <Route path="/cafe/la_tra" component={LeavesTea} />
          <Route path="/foodTable/thuc_uong" component={Drink} />
          <Route path="/foodTable/banh-man" component={Cake} />
          <Route path="/foodTable/banh-man-trang-mieng" component={DessertCake} />
          <Route path="/danhnhap/login" component={Login} />
          <Route path="/danhnhap/dangki" component={Regist} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default PublicRouter;
