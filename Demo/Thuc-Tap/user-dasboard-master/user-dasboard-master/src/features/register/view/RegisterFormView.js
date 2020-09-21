import React from "react";
import { Form, Typography, Input, Button, Icon, Select, Alert } from "antd";
import _ from "lodash";

import i18n from "../../../commons/utils/locales/i18n";
import registerRules from "./loginRules";

const { Option } = Select;

function RegisterFormView(props) {
  const lang = {
    title: i18n.t("register.title"),
    usernameField: i18n.t("register.username"),
    emailField: i18n.t("register.email"),
    passwordField: i18n.t("register.password"),
    confirmPasswordField: i18n.t("register.confirm_password"),
    remember: i18n.t("register.remember_me"),
    btn: i18n.t("register.do_register"),
    login: i18n.t("register.login_now"),
    phoneField: i18n.t("register.phone_number"),
    verifyPhone: i18n.t("register.verify_phone_number"),
    firstNameField: i18n.t("register.first_name"),
    lastNameField: i18n.t("register.last_name"),
    already_have_an_account: i18n.t("register.already_have_an_account")
  };

  const {
    loading,
    errors,
    form,
    onClickLogin,
    onClickRegister,
    onClickVerifyPhone
  } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        onClickRegister && onClickRegister(values);
      }
    });
  };

  const prefixSelector = getFieldDecorator("phonePrefix", {
    initialValue: "+84"
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">+84</Option>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  );

  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <Form.Item className="app-logo-container">
        <img src="/O-pay.png" alt="opay" className="app-logo" />
      </Form.Item>
      <Typography.Title level={4} className="register-form-title">
        {lang.title}
      </Typography.Title>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: registerRules.usernameRules
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={lang.usernameField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("email", {
          rules: registerRules.emailRules
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={lang.emailField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("firstName", {
          rules: registerRules.firstNameRules
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={lang.firstNameField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("lastName", {
          rules: registerRules.lastNameRules
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={lang.lastNameField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("password", {
          rules: registerRules.passwordRules
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder={lang.passwordField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("confirmPassword", {
          rules: registerRules.passwordRules
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder={lang.confirmPasswordField}
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator("mobilePhone", {
          rules: registerRules.phoneRules
        })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
      </Form.Item>

      {/* <Form.Item> */}
      {/* <Row gutter={[8, 0]}>
          <Col span={10}>
            {getFieldDecorator("phoneCode", {
              rules: registerRules.phoneCodeRules
            })(<Input />)}
          </Col>
          <Col span={14}>
            <Button
              onClickVerifyPhone={onClickVerifyPhone && onClickVerifyPhone}
            >
              {lang.verifyPhone}
            </Button>
          </Col>
        </Row> */}
      {/* </Form.Item> */}

      <Form.Item>
        {errors &&
          errors.map((error, index) => {
            const message = _.get(error, "messages.0");

            if (message && index < 3)
              return (
                <Alert
                  key={message}
                  message={i18n.t(`errors.form.${message.toLocaleLowerCase()}`)}
                  type="warning"
                  closable
                />
              );
            else return null;
          })}
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="register-form-button"
          loading={loading}
        >
          {lang.btn}
        </Button>
        <p style={{ textAlign: "center" }}>
          {lang.already_have_an_account}{" "}
          <a
            onClick={() => onClickLogin && onClickLogin()}
            style={{ textAlign: "center" }}
          >
            {lang.login}
          </a>
        </p>
      </Form.Item>
    </Form>
  );
}

const RegisterFormViewWrapped = Form.create({ name: "register_form" })(
  RegisterFormView
);

export default RegisterFormViewWrapped;
