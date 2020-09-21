import React from "react";
import { Form, Button, Typography, Row, Col } from "antd";
// import _ from "lodash";
import i18n from "../../../commons/utils/locales/i18n";
// import verifyEmailRules from "./verifyEmailRules";

function VerifyEmailFormView(props) {
  const lang = {
    title: i18n.t("verifyEmail.title"),
    emailField: i18n.t("verifyEmail.email"),
    passwordField: i18n.t("verifyEmail.password"),
    remember: i18n.t("verifyEmail.remember_me"),
    btnVerify: i18n.t("verifyEmail.do_verify"),
    btnVerifyFail: i18n.t("verifyEmail.do_verify_fail"),
    or: i18n.t("verifyEmail.or"),
    register: i18n.t("verifyEmail.register_now"),
    forgotPassword: i18n.t("verifyEmail.forgot_password")
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // props.onPressLogin && props.onPressLogin(values);
      }
    });
  };

  const {
    // form,
    email,
    errors,
    loading
  } = props;

  return (
    <Form onSubmit={handleSubmit} className="verify-form">
      <Row gutter={16}>
        <Col md={24} sm={24}>
          <Form.Item className='app-logo-container'>
            <img src="/O-pay.png" alt="opay" className="app-logo" />
          </Form.Item>
        </Col>
        <Col md={24} sm={24} style={{ justifyContent: 'center' }}>
          <Typography.Title level={4} className="verify-form-title">
            {lang.title}
          </Typography.Title>
          <Typography>
            <i>{email}</i>
          </Typography>
          {errors && errors.length > 0 ?
            <Typography className="verify-form-text-error">
              {lang.btnVerifyFail}!
            </Typography>
            :
            (
              <Button
                type="primary"
                htmlType="submit"
                className="verify-form-button"
                loading={loading}
              >
                {lang.btnVerify}
              </Button>
            )
          }

        </Col>
      </Row>
    </Form>
  );
}

const VerifyEmailFormViewWrapped = Form.create({ name: "login_form" })(VerifyEmailFormView);

export default VerifyEmailFormViewWrapped;
