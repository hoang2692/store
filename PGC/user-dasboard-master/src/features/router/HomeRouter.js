import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
  useHistory,
  Switch,
  Link
} from "react-router-dom";
import {
  Layout,
  Menu,
  Icon,
  Typography,
  Col,
  Row,
  Avatar,
  Dropdown,
  Drawer
} from "antd";
import _ from "lodash";
import { MenuFoldOutline, MenuUnfoldOutline } from "@ant-design/icons";

import "./HomeRouter.css";

import { routes } from ".";
import Dashboard from "../dashboard/viewModel";
import SendAndRequest from "../sendAndRequest/viewModel";
import ApiSetting from "../api-setting/viewModel";
import Transaction from "../transaction/viewModel";

import i18n from "../../commons/utils/locales/i18n";
import { getTheme } from "../../commons/theme";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../login/model/actions";

const { Header, Content, Footer, Sider } = Layout;
const { colors } = getTheme();

function HomeRouter(props) {
  const lang = {
    copyright: i18n.t("app.copyright"),
    menu_dashboard: i18n.t("home.menu.dashboard"),
    menu_transactions: i18n.t("home.menu.transactions"),
    menu_send_request: i18n.t("home.menu.send_and_request"),
    menu_settings: i18n.t("home.menu.settings"),
    menu_supports: i18n.t("home.menu.supports"),

    logout: i18n.t("app.logout"),
    user_profile: i18n.t("app.user_profile")
  };

  // const currentPath = props.location.pathname;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const firstName = useSelector(state =>
    _.get(state, "profileState.userData.firstName", "")
  );
  const lastName = useSelector(state =>
    _.get(state, "profileState.userData.lastName", "")
  );
  const username = useSelector(state =>
    _.get(state, "profileState.userData.username", "")
  );
  const isAuthenticated = useSelector(
    state => state.loginState.isAuthenticated
  );

  const handleOnClickLogout = () => {
    dispatch(logout());
  };

  const onOpenDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace("login");
    }
  }, [isAuthenticated]);

  const AccountMenus = (
    <Menu>
      <Menu.Item>
        <a>{lang.user_profile}</a>
      </Menu.Item>
      <Menu.Item>
        <Link to="/home/api-settings">API Setting</Link>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => handleOnClickLogout()}>{lang.logout}</a>
      </Menu.Item>
    </Menu>
  );

  const rendeListMenu = () => {
    return (
      <Menu style={{ borderRight: 0 }}>
        <Menu.Item>
          <Link
            to={routes.dashboard}
            className="menu-item"
            onClick={onCloseDrawer}
          >
            <Icon type="pie-chart" className="menu-icon" />
            <Typography.Text className="menu-label">
              {lang.menu_dashboard}
            </Typography.Text>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.transactions}
            className="menu-item"
            onClick={onCloseDrawer}
          >
            <Icon type="pie-chart" className="menu-icon" />
            <Typography.Text className="menu-label">
              {lang.menu_transactions}
            </Typography.Text>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.sendRequest}
            className="menu-item"
            onClick={onCloseDrawer}
          >
            <Icon type="pie-chart" className="menu-icon" />
            <Typography.Text className="menu-label">
              {lang.menu_send_request}
            </Typography.Text>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.settings}
            className="menu-item"
            onClick={onCloseDrawer}
          >
            <Icon type="pie-chart" className="menu-icon" />
            <Typography.Text className="menu-label">
              {lang.menu_settings}
            </Typography.Text>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to={routes.supports}
            className="menu-item"
            onClick={onCloseDrawer}
          >
            <Icon type="pie-chart" className="menu-icon" />
            <Typography.Text className="menu-label">
              {lang.menu_supports}
            </Typography.Text>
          </Link>
        </Menu.Item>
      </Menu>
    );
  };

  const renderDrawerMenu = () => {
    return (
      <div className="drawer-menu">
        <Drawer
          visible={drawerVisible}
          placement="left"
          onClose={onCloseDrawer}
        >
          {rendeListMenu()}
        </Drawer>
      </div>
    );
  };

  const renderSideMenu = () => {
    return (
      <Sider
        className="ant-layout-sider side-menu"
        collapsed
        collapsedWidth={"10em"}
      >
        <Link to={routes.dashboard} className="menu-item">
          <Icon type="pie-chart" className="menu-icon" />
          <Typography.Text className="menu-label">
            {lang.menu_dashboard}
          </Typography.Text>
        </Link>
        <Link to={routes.transactions} className="menu-item">
          <Icon type="pie-chart" className="menu-icon" />
          <Typography.Text className="menu-label">
            {lang.menu_transactions}
          </Typography.Text>
        </Link>
        <Link to={routes.sendRequest} className="menu-item">
          <Icon type="pie-chart" className="menu-icon" />
          <Typography.Text className="menu-label">
            {lang.menu_send_request}
          </Typography.Text>
        </Link>
        <Link to={routes.settings} className="menu-item">
          <Icon type="pie-chart" className="menu-icon" />
          <Typography.Text className="menu-label">
            {lang.menu_settings}
          </Typography.Text>
        </Link>
        <Link to={routes.supports} className="menu-item">
          <Icon type="pie-chart" className="menu-icon" />
          <Typography.Text className="menu-label">
            {lang.menu_supports}
          </Typography.Text>
        </Link>
      </Sider>
    );
  };

  const renderBurgurButton = () => {
    return (
      <>
        <div className="drawer-menu-bugur-button">
          {drawerVisible ? (
            <Icon
              type="menu-fold"
              theme="outlined"
              onClick={onCloseDrawer}
              style={{ fontSize: "1.5em" }}
            />
          ) : (
            <Icon
              type="menu-unfold"
              theme="outlined"
              onClick={onOpenDrawer}
              style={{ fontSize: "1.5em" }}
            />
          )}
        </div>
      </>
    );
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }} id="home-router">
        {renderDrawerMenu()}
        {renderSideMenu()}
        <Layout>
          <Header
            style={{ background: colors.header_background_color, padding: 0 }}
          >
            <Row type="flex" justify="space-between">
              <Col style={{ paddingLeft: "1em" }}>{renderBurgurButton()}</Col>

              <Col style={{ paddingRight: "1em" }}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                <Dropdown overlay={AccountMenus}>
                  <a style={{ marginLeft: "0.5em" }}>
                    <Typography.Text>
                      {lastName} {firstName}
                      {!firstName && !lastName && username}
                    </Typography.Text>
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Header>

          <Content style={{ margin: "0 1em" }}>
            <div
              style={{
                marginTop: "1em"
              }}
            >
              <Redirect path={routes.home} to={routes.dashboard} />
              <Route path={routes.dashboard}>
                <Dashboard />
              </Route>
              <Route path={routes.sendRequest}>
                <SendAndRequest />
              </Route>
              <Route path={routes.apiSetting}>
                <ApiSetting />
              </Route>
              <Route path={routes.transactions}>
                <Transaction />
              </Route>
            </div>
            {/* <Footer style={{ textAlign: "center" }}>{lang.copyright}</Footer> */}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default withRouter(HomeRouter);
