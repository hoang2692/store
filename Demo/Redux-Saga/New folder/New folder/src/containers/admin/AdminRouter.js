import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from "./AdminUi/menu";
import Quanlymenu from "./AdminUi/layout/quanlymenu/index";
import Quanlysanpham from "./AdminUi/layout/quanlysanpham/index"
import QuanlysanphamADD from './AdminUi/layout/quanlysanpham/Form';
import LoginAdmin from './AdminUi/login/LoginAdmin';
import Cart from './AdminUi/layout/quanlycart/cart';




class AdminRouter extends React.Component {

  render() {

    return (
      <div id="wrapper">
      <Menu />
        <Switch>
          <Route path="/admin" exact  />
          <Route path="/admin/quanlymenu" exact  component={Quanlymenu} />
          <Route path="/admin/quanlysanpham" history exact  component={Quanlysanpham} />
          <Route path="/admin/quanlysanpham/:id/add" exact  component={QuanlysanphamADD} />
          <Route path="/admin/quanlysanpham/add" exact  component={QuanlysanphamADD} />
          <Route path="/admin/quanlydonhang" exact  component={Cart} />
          <Route path="/admin/login" exact  component={LoginAdmin} />
        </Switch>
      </div>

    );
  }
};

export default AdminRouter;