import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button, notification } from "antd";

import i18n from "../../../commons/utils/locales/i18n";

function ModalCreate(props) {
  const {
    visible,
    setVisible,
    loading,
    form: { validateFields, getFieldDecorator }
  } = props;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      const { onCreateApp } = props;
      if (!err) {
        onCreateApp &&
          onCreateApp(values, success => {
            if (success) {
              setVisible(false);
              notification.success({
                message: i18n.t("apiSetting.create.form.success.create"),
                description: i18n.t(
                  "apiSetting.create.form.success.create_sub",
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
      title={i18n.t("apiSetting.create.title")}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Form className="create-api" onSubmit={handleSubmit}>
        <Form.Item
          label={i18n.t("apiSetting.create.form.name")}
          labelAlign="left"
        >
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: i18n.t("apiSetting.create.form.errors.missing_name")
              }
            ]
          })(
            <Input
              placeholder={i18n.t(
                "apiSetting.create.form.input_name_placeholder"
              )}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            style={{ float: "right" }}
            type="primary"
            htmlType="submit"
            icon="edit"
          >
            {i18n.t("apiSetting.create.create")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

ModalCreate.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired
};

export default Form.create({ name: "create-api" })(ModalCreate);
