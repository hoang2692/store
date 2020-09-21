import React from "react";
import {
  Form,
  Select,
  Button,
  InputNumber,
  Input,
  Alert,
  notification
} from "antd";
import _ from "lodash";

import sendRequestRules from "./sendFormRules";
import i18n from "../../../commons/utils/locales/i18n";

const { Option } = Select;

function SendForm(props) {
  /** Define methods */
  const methods = [
    { key: "cse", label: i18n.t("methods.cse") },
    { key: "opay", label: i18n.t("methods.opay") },
    { key: "momo", label: i18n.t("methods.momo"), disabled: true },
    { key: "paypal", label: i18n.t("methods.paypal"), disabled: true }
  ];

  //** Read props */
  const { loading, errors, onSubmit, form } = props;
  const { getFieldDecorator, resetFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit &&
          onSubmit(values, success => {
            if (success) {
              notification.success({
                message: i18n.t("send.form.success.title"),
                description: i18n.t("send.form.success.description", {
                  amount: values.amount,
                  method: values.method
                })
              });
              resetFields();
            }
          });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label={i18n.t("send.form.method")} hasFeedback>
        {getFieldDecorator("method", {
          rules: [{ required: true, message: "Please select method!" }]
        })(
          <Select placeholder={i18n.t("send.form.input_method_placeholder")}>
            {methods.map(method => (
              <Option disabled={method.disabled} value={method.key}>
                {method.label}
                {method.disabled && `(${i18n.t("methods.coming_soon")})`}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>

      <Form.Item label={i18n.t("send.form.amount")} hasFeedback>
        {getFieldDecorator("amount", {
          rules: sendRequestRules.amountRules
        })(
          <InputNumber
            defaultValue={0}
            placeholder={i18n.t("send.form.input_amount_placeholder")}
            style={{ width: "100%" }}
          />
        )}
      </Form.Item>

      <Form.Item label={i18n.t("send.form.to_address")} hasFeedback>
        {getFieldDecorator("toAddress", {
          rules: sendRequestRules.addressRules
        })(
          <Input
            placeholder={i18n.t("send.form.to_input_address_placeholder")}
          />
        )}
      </Form.Item>

      <Form.Item label={i18n.t("send.form.2fa_code")} hasFeedback>
        {getFieldDecorator("2fa_code", {
          rules: sendRequestRules.twoFaRules
        })(
          <Input placeholder={i18n.t("send.form.input_2fa_code_placeholder")} />
        )}
      </Form.Item>

      <Form.Item>
        {errors &&
          errors.map((error, index) => {
            const message = _.get(error, "messages.0");

            if (message && index < 3)
              return (
                <Alert
                  message={i18n.t(
                    `send.form.errors.${message.toLocaleLowerCase()}`
                  )}
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
          loading={loading}
          disabled={loading}
        >
          {i18n.t("send.form.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedSendForm = Form.create({ name: "send_form" })(SendForm);

export default WrappedSendForm;
