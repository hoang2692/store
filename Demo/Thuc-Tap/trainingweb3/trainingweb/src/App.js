import React, { Component } from "react";
import Footer from "./containers/layout/footer";
import Show from "./components/Show";
import Info from "./components/Info";

import Navmenu from "./components/Navmenu";
import Address from "./components/Address";
import Dangnhap from "./components/Dangnhap";
import Dangky from "./components/Dangky";
import Hanhtrinh from "./components/hanhtrinh_cf";
import Hanhtrinh_tra from "./components/hanhtrinh_tra";
import Coffee1 from "./components/coffee1";
import Coffee2 from "./components/coffee2";
import Coffee3 from "./components/coffee3";
import Coffee4 from "./components/coffee4";
import Latra2 from "./components/latra2";
import Latra1 from "./components/latra1";
import Admin from "./Adminstrating";
import Adminstrator from "./Adminstrating";
import Bakery from "./components/bakery";
import Dinning from "./components/Dining";
import ThucUongContainer from "./containers/ThucUongContainer";
import GioHangContainer from "./containers/GioHangContainer";
import Deliver from "./components/Deliver";
import Employeemanager from "./components/Employee";
import Navadmin from "./components/Navadmin";
import Productmanager from "./components/Productmanager";
import Billmanager from "./components/Billmanager";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Members from "./components/Members";
import ThucUongSanPham from "./components/thucuongsanpham";

class App extends Component {
  render() {
    return (
      /*
    <Cart />
    <Deliver />
    
    
    
    <Show />
    <Info />
    <Address />
    <Footer />
    */
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Show />
                <Info />
                <Address />
              </div>
            )}
          />
          <Route
            path="/caphe"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Coffee1 />
              </div>
            )}
          />
          <Route
            path="/caphe/hanhtrinhcaphe"
            component={(props) => (
              <div>
                <Navmenu />
                <Hanhtrinh />
              </div>
            )}
          />
          <Route
            path="/caphe/coffe1"
            component={(props) => (
              <div>
                <Navmenu />
                <Coffee1 />
              </div>
            )}
          />
          <Route
            path="/caphe/coffe2"
            component={(props) => (
              <div>
                <Navmenu />
                <Coffee2 />
              </div>
            )}
          />
          <Route
            path="/caphe/coffe3"
            component={(props) => (
              <div>
                <Navmenu />
                <Coffee3 />
              </div>
            )}
          />
          <Route
            path="/caphe/coffe4"
            component={(props) => (
              <div>
                <Navmenu />
                <Coffee4 />
              </div>
            )}
          />
          <Route
            path="/tra"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Latra1 />
              </div>
            )}
          />
          <Route
            path="/tra/latra1"
            component={(props) => (
              <div>
                <Navmenu />
                <Latra1 />
              </div>
            )}
          />
          <Route
            path="/tra/hanhtrinh"
            component={(props) => (
              <div>
                <Navmenu />
                <Hanhtrinh_tra />
              </div>
            )}
          />
          <Route
            path="/tra/latra2"
            component={(props) => (
              <div>
                <Navmenu />
                <Latra2 />
              </div>
            )}
          />
          <Route
            path="/sanpham"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <ThucUongContainer />
              </div>
            )}
          />
          <Route
            path="/sanpham/thucuong"
            component={(props) => (
              <div>
                <Navmenu />
                <ThucUongContainer />
              </div>
            )}
          />
          <Route
            path="/sanpham/monman"
            component={(props) => (
              <div>
                <Navmenu />
                <Dinning />
              </div>
            )}
          />
          <Route
            path="/sanpham/bakery"
            component={(props) => (
              <div>
                <Navmenu />
                <Bakery />
              </div>
            )}
          />
          <Route
            path="/dangnhap"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Dangnhap />
              </div>
            )}
          />
          <Route
            path="/dangky"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Dangky />
              </div>
            )}
          />
          <Route
            path="/cart"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <GioHangContainer />
              </div>
            )}
          />
          <Route
            path="/cart/deliver"
            component={(props) => (
              <div>
                <Navmenu />
                <Deliver />
              </div>
            )}
          />
          <Route
            path="/quanly"
            exact
            component={(props) => (
              <div>
                <Navmenu />
                <Adminstrator />
              </div>
            )}
          />
          <Route
            path="/quanly/nhanvien"
            component={(props) => (
              <div>
                <Navadmin />
                <Employeemanager />
              </div>
            )}
          />
          <Route
            path="/quanly/sanpham"
            component={(props) => (
              <div>
                <Navadmin />
                <Productmanager />
              </div>
            )}
          />
          <Route
            path="/quanly/donhang"
            component={(props) => (
              <div>
                <Navadmin />
                <Billmanager />
              </div>
            )}
          />
          <Route
            path="/quanly/members"
            component={(props) => (
              <div>
                <Navadmin />
                <Members />
              </div>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
