import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Select,
  Button,
  Input,
  List
} from "antd";
import { getTheme } from "../../../commons/theme";
import LandingBackground from "../../../commons/images/landing-background.jpg";

import "./view.css";
import brandIcons from "../../../commons/images/brandIcons";
import moment from "moment";

const { Option } = Select;
const { Content } = Layout;

const fakeTransactions = [
  {
    key: "1",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 20.29,
    amountOfAsset: 0.5,
    assets: "CSE",
    status: "success",
    txId: "MO)(@Q#(*@2109enwoi*@J@NMKLMDKLAWNJ DAW!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "2",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 19.44,
    amountOfAsset: 0.055,
    assets: "CSE",
    status: "success",
    txId: "NSE)#NOENOFNE23H0NFI3nsoinoOINOUnbuibouBUb!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "3",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 100.998,
    amountOfAsset: 2.5,
    assets: "CSE",
    status: "failure",
    txId: "2ce192he91NABUNEUIB0hNUbuBubIB9biubuibuiBIBIBIU!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "4",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 2.4,
    amountOfAsset: 0.055,
    assets: "CSE",
    status: "pending",
    txId: "DMAOINWINDQWODQNOWNDNWODNQWOIDQNWODNQNWDNOQNWD!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "5",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 2.4,
    amountOfAsset: 0.055,
    assets: "CSE",
    status: "pending",
    txId: "DMAOINWINDQWODQNOWNDNWODNQWOIDQNWODNQNWDNOQNWD!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "6",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 2.4,
    amountOfAsset: 0.055,
    assets: "CSE",
    status: "pending",
    txId: "DMAOINWINDQWODQNOWNDNWODNQWOIDQNWODNQNWDNOQNWD!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  },
  {
    key: "7",
    fromAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    toAddress: "dBAHSJBDABAJSBD@&812baai@BIubnq22*(Q2bi",
    type: "in",
    method: brandIcons["paypal"],
    amount: 2.4,
    amountOfAsset: 0.055,
    assets: "CSE",
    status: "pending",
    txId: "DMAOINWINDQWODQNOWNDNWODNQWOIDQNWODNQNWDNOQNWD!@()!INDQJOWD",
    createdAt: moment(new Date()).format("YYYY-MM-DD hh:mm")
  }
];

function SearchSection() {
  const currencies = [
    { title: "btc" },
    { title: "opay" },
    { title: "cse" },
    { title: "eth" },
    { title: "ltc" },
    { title: "bch" },
    { title: "momo" },
    { title: "paypal" }
  ];
  const langs = {
    input: "Input",
    output: "Output",
    // currency: "Currency",
    exchange: "Exchange",
    enter_amount: "txId, hash, transactionID, orderID,...",
    search_transaction: "Search transaction",
    search: "Search"
  };

  return (
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        md={{ span: 10, offset: 7 }}
        className="content-custom container-shadow"
      >
        <Row gutter={[16, 16]} type="flex" align="center" justify="center">
          <Col xs={24} md={9} style={{ textAlign: "left" }}>
            <Typography.Title className="sub-title caption">
              {langs.input}
            </Typography.Title>
            <Select defaultValue="btc" className="selection-custom">
              {currencies.map(currency => (
                <Option value={currency.title}>
                  {currency.title.toLocaleUpperCase()}
                </Option>
              ))}
            </Select>
          </Col>

          <Col xs={24} md={9} style={{ textAlign: "left" }}>
            <Typography.Title className="sub-title caption">
              {langs.output}
            </Typography.Title>
            <Select defaultValue="opay" className="selection-custom">
              {currencies.map(currency => (
                <Option value={currency.title}>
                  {currency.title.toLocaleUpperCase()}
                </Option>
              ))}
            </Select>
          </Col>

          <Col xs={24} md={6}>
            <Button
              type="primary"
              size="large"
              style={{ height: "3.7em", width: "9em" }}
            >
              {langs.exchange}
            </Button>
          </Col>
        </Row>
        <Row
          type="flex"
          justify="left"
          align="middle"
          style={{ marginTop: "2em" }}
        >
          <Col xs={24} md={24} style={{ textAlign: "left" }}>
            <Typography.Title className="sub-title caption">
              {langs.search_transaction}
            </Typography.Title>
            <Input.Search placeholder={langs.enter_amount} enterButton />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function IndustrySection() {
  const industries = [
    {
      id: 1,
      name: "Coffee shop",
      transactions: fakeTransactions
    },
    {
      id: 2,
      name: "Spa",
      transactions: fakeTransactions
    },
    {
      id: 3,
      name: "Industry 3",
      transactions: fakeTransactions
    },
    {
      id: 4,
      name: "Industry 4",
      transactions: fakeTransactions
    }
  ];
  return (
    <Row>
      <Col span={16} offset={4} className="content-custom container-shadow">
        <Row gutter={[16, 16]}>
          {industries.map(item => {
            const { transactions } = item;
            return (
              <Col xs={24} md={6}>
                <List
                  header={
                    <Typography.Title level={4}>{item.name}</Typography.Title>
                  }
                  dataSource={transactions}
                  renderItem={tranItem => (
                    <List.Item>
                      <Typography.Text ellipsis>
                        {tranItem.txId}
                      </Typography.Text>

                      <Typography.Text
                        style={{
                          width: "30em",
                          textAlign: "right",
                          fontWeight: "bold"
                        }}
                      >
                        {tranItem.amount} OPAY
                      </Typography.Text>
                    </List.Item>
                  )}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default function LandingView() {
  const currencies = [
    { title: "btc" },
    { title: "opay" },
    { title: "cse" },
    { title: "eth" },
    { title: "ltc" },
    { title: "bch" },
    { title: "momo" },
    { title: "paypal" }
  ];
  const langs = {
    title: "Any Coins <-> OPAY <-> Any Money",
    subTitle: "Solution for payment by Blockchain 3.0 with no wallet necessary"
  };

  return (
    <Layout id="landing-page">
      <Content className="background-content">
        <div className="background-block" />
      </Content>

      <Content className="absolute-content">
        <Row gutter={[16, 16]} type="flex" align="center" justify="center">
          <Col xs={24} md={8} style={{ alignItems: "flex-start" }}>
            <Row gutter={[0, 0]} type="flex" justify="end">
              <Col xs={24} md={12}>
                <Typography.Title className="big-title text-shadow">
                  Any Money
                </Typography.Title>
              </Col>
              <Col xs={24} md={2}>
                <img
                  src={require("../../../commons/images/transfer.png")}
                  width={`${50 * 1.2}em`}
                  height="50em"
                />
              </Col>
            </Row>
          </Col>

          <Col xs={24} md={4}>
            <Typography.Title className="big-title text-shadow">
              OPAY
            </Typography.Title>
          </Col>

          <Col xs={24} md={8}>
            <Row gutter={[0, 0]}>
              <Col xs={24} md={2}>
                <img
                  src={require("../../../commons/images/transfer.png")}
                  width={`${50 * 1.2}em`}
                  height="50em"
                />
              </Col>
              <Col xs={24} md={12}>
                <Typography.Title className="big-title text-shadow">
                  Any Money
                </Typography.Title>
              </Col>
            </Row>
          </Col>
        </Row>

        <SearchSection />
        <IndustrySection />
      </Content>
    </Layout>
  );
}
