import React, { useState } from "react";
import { Modal, Input, Form } from "antd";
import PropTypes from "prop-types";
import i18n from "../../../commons/utils/locales/i18n";

export function ModalEnterPassword(props) {
  const [password, setPassword] = useState("");

  const onOke = () => {
    props.onSubmit &&
      props.onSubmit({ id: props.dataEdit.ID, password }, success => {
        props.setVisible(false);
        setPassword("");
      });
  };
  const onCancel = () => {
    props.setVisible(false);
    setPassword("");
  };

  return (
    <div>
      <Modal
        title={i18n.t("apiSetting.showSecret.title")}
        visible={props.visible}
        onOk={onOke}
        confirmLoading={props.loading}
        onCancel={onCancel}
        okText={i18n.t("apiSetting.showSecret.submit")}
        cancelText={i18n.t("apiSetting.showSecret.cancel")}
      >
        <Form>
          <Form.Item label={i18n.t("apiSetting.showSecret.password")}>
            <Input.Password
              placeholder={i18n.t("apiSetting.showSecret.password_placeholder")}
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

ModalEnterPassword.propTypes = {
  dataEdit: PropTypes.any.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
