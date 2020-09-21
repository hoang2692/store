import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Card, notification } from "antd";
import _ from "lodash";

import TableData from "./TableData";
import ModalCreate from "./ModalCreate";
import ModalEdit from "./ModalEdit";
// style
import "./view.css";
import i18n from "../../../commons/utils/locales/i18n";
import { ModalEnterPassword } from "./ModalEnterPassword";

const data = [
  {
    name: "OPICA",
    apiKey: "fafefwefwef243rffadas2312313dqwe43434234",
    apiSecret: "fafefwefwef243rffadas2312313dqwe43434234",
    webhookURL: "https://demo.shop/webhook/"
  },
  {
    name: "ADS OWIFI",
    apiKey: "fafefwefwef243rffadas231",
    apiSecret: "fafefwefwef243rffadas231",
    webhookURL: "https://demo.shop/webhook/"
  },
  {
    name: "My SHOP",
    apiKey: "fafefwefwef243rffadas2312313dqwe43434234",
    apiSecret: "fafefwefwef243rffadas2312313dqwe43434234",
    webhookURL: "https://demo.shop/webhook/"
  }
];
const { confirm } = Modal;

export default function ApiSettingView(props) {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [passwordModalVisible, setVisibleModalPassword] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const handleConfirmRemove = data => {
    confirm({
      title: `Are you sure to delete this application ( ${data.name} )?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        props.onDeleteApp &&
          props.onDeleteApp(data.ID, success => {
            if (success) {
              notification.success({
                message: i18n.t("apiSetting.delete.form.success.delete"),
                description: i18n.t(
                  "apiSetting.delete.form.success.delete_sub",
                  { name: data.name }
                )
              });
            }
          });
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  const dataEdotInStore =
    dataEdit.ID && props.apiSettingData.find(item => item.ID === dataEdit.ID);

  const apiSecret = dataEdotInStore && _.get(dataEdotInStore, "apiSecret", null);

  useEffect(() => {
    if (visibleEdit === false) {
      props.onClearSecret && props.onClearSecret();
    }
  }, [visibleEdit]);

  return (
    <div id="api-setting">
      <Row>
        <Col span={24}>
          <Card
            title="APIS Setting"
            className="container"
            extra={
              <Button
                onClick={() => setVisibleCreate(true)}
                className="btn-add"
              >
                New application
              </Button>
            }
          >
            <TableData
              dataTable={props.apiSettingData}
              setDataEdit={setDataEdit}
              setVisibleEdit={setVisibleEdit}
              onRemove={handleConfirmRemove}
              total={props.totalApiSettings}
              onChangePage={props.onChangePage}
              loading={props.tableLoading}
            />
          </Card>
        </Col>
      </Row>

      <ModalCreate
        visible={visibleCreate}
        setVisible={setVisibleCreate}
        loading={props.createLoading}
        onCreateApp={props.onCreateApp}
      />
      <ModalEdit
        visible={visibleEdit}
        setVisible={setVisibleEdit}
        dataEdit={dataEdit}
        loading={props.updateLoading}
        onUpdateApp={props.onUpdateApp}
        onShowSecretKey={() => setVisibleModalPassword(true)}
        apiSecret={apiSecret}
      />

      <ModalEnterPassword
        dataEdit={dataEdit}
        visible={passwordModalVisible}
        setVisible={setVisibleModalPassword}
        loading={props.verifyPasswordLoading}
        onSubmit={props.onGetApiSecret}
      />
    </div>
  );
}
