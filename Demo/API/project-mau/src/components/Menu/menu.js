import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản ký danh sách',
        to: '/product-items',
        exact: false
    }
];

const MenuLink = ({label,to, activeWhenExact}) => {
        return (
            <Route path={to} label={label} exact={activeWhenExact} children={((match) =>{
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to} className="nav-link">{label}</Link>
                    </li>
                )
            })}>
            
            </Route>
        )
}

class Menu extends Component {

    showRoute = (menus) =>{
        var result = null;
        result = menus.map((menu,index) =>{
            return <MenuLink label={menu.label} key={index} to={menu.to} activeWhenExact={menu.exact}/>
        })
        return result;
    }

  render(){
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <span className="navbar-brand">CALL API</span>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <MenuLink to="/" label="Trang chủ"/>
                <MenuLink to="/product-items" label="Quản lí danh sách"/>
                {this.showRoute(menus)}
              </ul>
          </div>
      </nav>
  );}
}

export default Menu;
