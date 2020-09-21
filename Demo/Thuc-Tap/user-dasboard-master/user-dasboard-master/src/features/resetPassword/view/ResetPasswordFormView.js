import React from "react";
import {
  Form,
  Typography,
  Input,
  Button,
  Icon,
  Select,
  Alert
} from "antd";
import _ from "lodash";

import i18n from "../../../commons/utils/locales/i18n";
import registerRules from "./resetPasswordRules";

const { Option } = Select;

function ResetPasswordFormView(props) {
  const lang = {
    title: i18n.t("resetPassword.title"),
    passwordField: i18n.t("resetPassword.password"),
    confirmPasswordField: i18n.t("resetPassword.repassword"),
    btn: i18n.t("resetPassword.do_reset"),
    reset_failure: i18n.t("resetPassword.reset_failure"),

  };

  const {
    loading,
    errors,
    form,
    onClickResetPassword,
  } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        onClickResetPassword && onClickResetPassword(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="reset-password-form">
      <Form.Item className='app-logo-container'>
        <img src="/O-pay.png" alt="opay" className="app-logo" />
      </Form.Item>
      <Form.Item>
      <Typography.Title level={4} className="reset-password-form-title">
        {lang.title}
      </Typography.Title>
      </Form.Item>
      {
        errors && errors.length > 0 ? (
          <Form.Item>
            <Typography className="error-text">
              {lang.reset_failure}
            </Typography>
          </Form.Item>
        ) : (
            <div>
              <Form.Item>
                {getFieldDecorator("newPassword", {
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
                {getFieldDecorator("confirm-password", {
                  rules: registerRules.rePasswordRules
                })(
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    placeholder={lang.confirmPasswordField}
                  />
                )}
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="reset-password-form-button"
                loading={loading}
              >
                {lang.btn}
              </Button>
            </div>
          )
      }

    </Form>
  );
}

const ResetPasswordFormViewWrapped = Form.create({ name: "reset_password_form" })(
  ResetPasswordFormView
);

export default ResetPasswordFormViewWrapped;
