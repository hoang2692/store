import React, { useEffect, useState } from "react";
import { Form, Select, Button, Alert, Input, Icon } from "antd";
import QRCode from "qrcode.react";
import _ from "lodash";
import { CopyToClipboard } from "react-copy-to-clipboard";

import requestRequestRules from "./requestFormRules";
import i18n from "../../../commons/utils/locales/i18n";
import { getMethodAddress } from "../../../commons/utils/helpers/walletHelper";

const { Option } = Select;

function RequestForm(props) {
  /** Define methods */
  const methods = [
    { key: "cse", label: i18n.t("methods.cse") },
    { key: "opay", label: i18n.t("methods.opay") },
    { key: "momo", label: i18n.t("methods.momo"), disabled: true },
    { key: "paypal", label: i18n.t("methods.paypal"), disabled: true }
  ];

  /**
   * States
   */
  const [isCopied, setIsCopied] = useState(false);

  //** Read props */
  const { loading, errors, onSubmit, form, requestData } = props;
  const { getFieldDecorator } = form;

  const submit = values => {
    if (loading) return;
    onSubmit && onSubmit(values, success => {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        submit(values);
      }
    });
  };

  useEffect(() => {
    // init data
    submit({ method: "cse" });
  }, []);

  const onChangeMethod = method => {
    submit({ method });
  };

  const requestAddress = getMethodAddress(requestData);

  return (
    <Form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <Form.Item>
        <QRCode value={requestAddress || ""} size={200} />
      </Form.Item>

      <Form.Item
        style={{ textAlign: "left" }}
        label={i18n.t("request.form.address")}
      >
        <Input
          addonAfter={
            <CopyToClipboard
              text={requestAddress}
              onCopy={() => {
                setIsCopied(true);
                _.debounce(() => {
                  setIsCopied(false);
                }, 1000)();
              }}
            >
              <Icon type={isCopied ? "check" : "copy"} theme="outlined" />
            </CopyToClipboard>
          }
          value={requestAddress || ""}
          disabled
        />
      </Form.Item>

      <Form.Item
        label={i18n.t("request.form.method")}
        hasFeedback
        style={{ textAlign: "left" }}
      >
        {getFieldDecorator("method", {
          rules: [
            {
              required: true,
              message: i18n.t("request.form.input_method_placeholder")
            }
          ],
          initialValue: "cse"
        })(
          <Select
            placeholder={i18n.t("request.form.input_method_placeholder")}
            onChange={value => onChangeMethod(value)}
          >
            {methods.map(method => (
              <Option disabled={method.disabled} value={method.key}>
                {method.label}
                {method.disabled && `(${i18n.t("methods.coming_soon")})`}
              </Option>
            ))}
          </Select>
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
                    `request.form.errors.${message.toLocaleLowerCase()}`
                  )}
                  type="error"
                  closable
                />
              );
            else return null;
          })}
      </Form.Item>

      {/* <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          {i18n.t("request.form.submit")}
        </Button>
      </Form.Item> */}
    </Form>
  );
}

const WrappedRequestForm = Form.create({ name: "request_form" })(RequestForm);

export default WrappedRequestForm;
