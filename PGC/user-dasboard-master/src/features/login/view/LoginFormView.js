import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox, Typography, Alert } from "antd";
import _ from "lodash";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login';

import i18n from "../../../commons/utils/locales/i18n";
import loginRules from "./loginRules";
import IC_ROUND_FACEBOOK from "../../../commons/images/ic-round-facebook.png";
import IC_ROUND_GOOGLE_PLUS from "../../../commons/images/ic-round-google-plus.png";
import IC_ROUND_TWITTER from "../../../commons/images/ic-round-twitter.png";

function LoginFormView(props) {
  const lang = {
    title: i18n.t("login.title"),
    emailField: i18n.t("login.email"),
    passwordField: i18n.t("login.password"),
    remember: i18n.t("login.remember_me"),
    btnLogin: i18n.t("login.do_login"),
    or: i18n.t("login.or"),
    register: i18n.t("login.register_now"),
    forgotPassword: i18n.t("login.forgot_password")
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.onPressLogin && props.onPressLogin(values);
      }
    });
  };

  const {
    form,
    onPressRegister,
    onPressLoginFacebook,
    onPressLoginGoogle,
    onPressLoginTwitter,
    valueEmail,
    valuePassword,
    valueRemember,
    errors,
    loading
  } = props;
  const { getFieldDecorator, setFieldsValue } = form;

  useEffect(() => {
    setFieldsValue({
      email: valueEmail,
      password: valuePassword,
      remember: valueRemember
    });
  }, [valueEmail, valuePassword, valueRemember]);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item className='app-logo-container'>
        <img src="/O-pay.png" alt="opay" className="app-logo" />
      </Form.Item>
      <Typography.Title level={4} className="login-form-title">
        {lang.title}
      </Typography.Title>

      <Form.Item>
        {getFieldDecorator("email", {
          rules: loginRules.emailRules
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={lang.emailField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("password", {
          rules: loginRules.passwordRules
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder={lang.passwordField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {errors &&
          errors.map((error, index) => {
            const message = _.get(error, "messages.0");

            if (message && index < 3)
              return (
                <Alert
                  message={i18n.t(`errors.form.${message.toLocaleLowerCase()}`)}
                  type="error"
                  closable
                />
              );
            else return null;
          })}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: false
        })(
          <Checkbox className="login-form-checkbox">{lang.remember}</Checkbox>
        )}
        <a className="login-form-forgot" href="">
          {lang.forgotPassword}
        </a>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          disabled={loading}
          loading={loading}
        >
          {lang.btnLogin}
        </Button>
        <div className="login-form-socials">
          {lang.or}
          <FacebookLogin
            appId="752964145216200"
            autoLoad={false}
            callback={onPressLoginFacebook}
            fields="first_name,middle_name,last_name,email,picture"
            isMobile={false}
            render={renderProps => (
              // <button onClick={renderProps.onClick}>This is my custom FB button</button>
              <Button
                disabled={loading}
                type="link"
                shape="circle"
                size={24}
                style={{ marginLeft: 20 }}
                onClick={renderProps.onClick}
              // onClick={() => onPressLoginFacebook && onPressLoginFacebook()}
              >
                <img src={IC_ROUND_FACEBOOK} className="social-ic" />
              </Button>
            )}
          />
          <GoogleLogin
            clientId="458649414915-luqmpg57dm2q9d1icqul3decuibjkdit.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                disabled={loading}
                type="link"
                shape="circle"
                size={24}
                onClick={renderProps.onClick}
              >
                <img src={IC_ROUND_GOOGLE_PLUS} className="social-ic" />
              </Button>)}
            buttonText="Login"
            onSuccess={onPressLoginGoogle}
            onFailure={onPressLoginGoogle}
            cookiePolicy={'single_host_origin'}
          />

          {/* <Button
            disabled={loading}
            type="link"
            shape="circle"
            size={24}
            onClick={() => onPressLoginTwitter && onPressLoginTwitter()}
          >
            <img src={IC_ROUND_TWITTER} className="social-ic" />
          </Button> */}
        </div>
        <a
          onClick={onPressRegister && onPressRegister}
          style={{ float: "right" }}
        >
          {lang.register}
        </a>
      </Form.Item>
    </Form>
  );
}

const LoginFormViewWrapped = Form.create({ name: "login_form" })(LoginFormView);

export default LoginFormViewWrapped;
