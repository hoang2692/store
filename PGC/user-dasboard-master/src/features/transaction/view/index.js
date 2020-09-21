import React, { useState } from "react";
import { Modal, Button, Row, Col, Card, notification, Select } from "antd";

import TableData from "./TableData";

// style
import "./view.css";
import "./view.responsive.css";
import i18n from "../../../commons/utils/locales/i18n";

export default function TransactionView(props) {
  const lang = {
    all: i18n.t("transaction.options.all"),
    income: i18n.t("transaction.options.income"),
    outcome: i18n.t("transaction.options.outcome"),
  };
  const [currentType, setType] = useState('all');
  return (
    <div id="transaction-page">
      <Row>
        <Col span={24}>
          <Card
            title="Transactions"
            className="container"
            extra={(
              <Select defaultValue="all" className="select-options" onChange={(type) => {
                setType(type);
                props.onChangePage(1, 10, { type });
              }}>
                <Select.Option value="all">{lang.all}</Select.Option>
                <Select.Option value="0">{lang.income}</Select.Option>
                <Select.Option value="1">{lang.outcome}</Select.Option>
              </Select>
            )}
          >
            <TableData
              dataTable={props.transactionData}
              total={props.totalTransactions}
              onChangePage={(page, pageSize) => props.onChangePage(page, pageSize, { type: currentType })}
              loading={props.tableLoading}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
