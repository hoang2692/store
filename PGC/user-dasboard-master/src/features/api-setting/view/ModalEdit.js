import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button, notification, Icon, Tooltip } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import _ from "lodash";

import i18n from "../../../commons/utils/locales/i18n";

function ModalEdit(props) {
  const {
    visible,
    setVisible,
    dataEdit,
    loading,
    onShowSecretKey,
    form: { validateFields, getFieldDecorator }
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.onUpdateApp &&
          props.onUpdateApp({ ...values, id: dataEdit.ID }, success => {
            if (success) {
              setVisible(false);
              notification.success({
                message: i18n.t("apiSetting.update.form.success.update"),
                description: i18n.t(
                  "apiSetting.update.form.success.update_sub",
                  { name: values.name }
                )
              });
            }
          });
      }
    });
  };

  return (
    <Modal
      title="Update API"
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form className="edit-api" onSubmit={handleSubmit}>
        <Form.Item label="App Name" labelAlign="left">
          {getFieldDecorator("name", {
            initialValue: dataEdit && dataEdit.name,
            rules: [{ required: true, message: "Enter name please !" }]
          })(<Input placeholder="Name" />)}
        </Form.Item>
        <Form.Item label="ApiKey" labelAlign="left">
          {getFieldDecorator("apiKey", {
            initialValue: dataEdit && dataEdit.apiKey
            // rules: [{ required: true, message: 'Enter api key please !' }]
          })(<Input disabled />)}
        </Form.Item>
        <Form.Item label="ApiSecret" labelAlign="left">
          <Input
            value={props.apiSecret || "●●●●●●●●●●●●●●●●"}
            disabled
            addonAfter={
              props.apiSecret ? (
                <CopyToClipboard
                  text={props.apiSecret}
                  onCopy={() => {
                    setIsCopied(true);
                    _.debounce(() => {
                      setIsCopied(false);
                    }, 1000)();
                  }}
                >
                  <Tooltip placement="top" title={i18n.t(isCopied ? "copied" : "copy")}>
                    <Icon type={isCopied ? "check" : "copy"} theme="outlined" />
                  </Tooltip>
                </CopyToClipboard>
              ) : (
                <Icon
                  type="eye-invisible"
                  theme="outlined"
                  onClick={() => props.onShowSecretKey()}
                />
              )
            }
          />
        </Form.Item>
        <Form.Item label="Url" labelAlign="left">
          {getFieldDecorator("webhookURL", {
            initialValue: dataEdit && dataEdit.webhookURL,
            rules: [{ required: true, message: "Enter webhook url please !" }]
          })(<Input placeholder="Ex: https://yourshop.com/payment/webhook" />)}
        </Form.Item>
        <Form.Item>
          <Button
            style={{ float: "right" }}
            type="primary"
            htmlType="submit"
            loading={loading}
            icon="edit"
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

ModalEdit.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  dataEdit: PropTypes.object.isRequired,
  form: PropTypes.any.isRequired,
  onShowSecretKey: PropTypes.func.isRequired,
  apiSecret: PropTypes.string.isRequired
};

export default Form.create({ name: "edit-api" })(ModalEdit);
