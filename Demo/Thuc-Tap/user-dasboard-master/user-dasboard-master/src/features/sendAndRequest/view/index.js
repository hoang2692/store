import React, { useState } from "react";
import { Card, notification, Row, Col } from "antd";

import LayoutBackgroundImage from "../../../commons/components/Layout/LayoutBackgroundImage";
import SendForm from "./SendForm";
import RequestForm from "./RequestForm";

import "./view.css";
import i18n from "../../../commons/utils/locales/i18n";

export default function SendAndRequest(props) {
  const {
    onSendSubmit,
    sendLoading,
    sendErrors,
    onRequestSubmit,
    requestLoading,
    requestErrors,
    requestData
  } = props;
  // Define tabs config
  const tabList = [
    {
      key: "send",
      tab: "Send"
    },
    {
      key: "request",
      tab: "Request"
    }
  ];

  // Handle change tab
  const [tabKey, setTabKey] = useState("send");
  const onTabChange = (key, type) => {
    setTabKey(key);
  };

  const contentList = {
    send: (
      <SendForm
        onSubmit={onSendSubmit}
        loading={sendLoading}
        errors={sendErrors}
      />
    ),
    request: (
      <RequestForm
        onSubmit={onRequestSubmit}
        loading={requestLoading}
        errors={requestErrors}
        requestData={requestData}
      />
    )
  };

  // Render
  return (
    <div id="send-request-page">
      <Card
        style={{ width: "100%" }}
        tabList={tabList}
        activeTabKey={tabKey}
        onTabChange={key => {
          onTabChange(key, "key");
        }}
        className="mobile-vision"
      >
        {contentList[tabKey]}
      </Card>

      <Row gutter={[16, 16]} className="web-vision" style={{ width: "100%" }}>
        <Col xs={24} md={12}>
          <Card title={i18n.t("send.form.send")} bordered={false}>
            {contentList.send}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={i18n.t("request.form.request")} bordered={false}>
            {contentList.request}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
