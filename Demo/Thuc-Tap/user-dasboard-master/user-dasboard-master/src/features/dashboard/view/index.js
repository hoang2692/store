import React, { useState } from "react";
import {
  Typography,
  Icon,
  Row,
  Col,
  Divider,
  Radio,
  Card,
  Table,
  Layout
} from "antd";
import { Line } from "react-chartjs-2";

import StartCard from "./StatCard";
import { getTheme } from "../../../commons/theme";
import i18n from "../../../commons/utils/locales/i18n";

import "./view.css";
import moment from "moment";
import brandIcons from "../../../commons/images/brandIcons";

const { colors } = getTheme();

const virtualData = {
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "transparent",
        data: [20, 24, 26, 20, 29, 30, 50],
        borderWidth: 3,
        borderColor: "#1890ff",
        lineTension: 0
      },
      {
        label: "Outcome",
        backgroundColor: "transparent",
        data: [15, 18, 14, 27, 18, 16, 56],
        borderWidth: 3,
        borderColor: "#fc4a1a",
        lineTension: 0
      }
    ]
  }
};

const dataSource = [
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

function DashboardView(props) {
  const lang = {
    card1_name: i18n.t("dashboard.total"),
    card2_name: i18n.t("dashboard.total_income"),
    card3_name: i18n.t("dashboard.total_outcome"),

    currency: i18n.t("app.currency_name"),
    this_week: i18n.t("dashboard.this_week"),
    today: i18n.t("dashboard.today"),

    stat: i18n.t("dashboard.stat"),
    day: i18n.t("dashboard.stat_by_day"),
    week: i18n.t("dashboard.stat_by_week"),
    month: i18n.t("dashboard.stat_by_month"),
    year: i18n.t("dashboard.stat_by_year"),

    transactions: i18n.t("dashboard.transaction.transactions"),
    method: i18n.t("dashboard.transaction.method"),
    txid: i18n.t("dashboard.transaction.txid"),
    amount: i18n.t("dashboard.transaction.amount"),
    status: i18n.t("dashboard.transaction.status"),
    time: i18n.t("dashboard.transaction.time"),
    more_transactions: i18n.t("dashboard.transaction.more_transactions"),
    transaction_history: i18n.t("dashboard.transaction.transaction_history")
  };
  const ICON_SIZE = "2em";
  const ICON_COLOR = colors.text_color;

  const transactionscolumns = [
    {
      title: lang.method,
      dataIndex: "method",
      key: "method",
      width: "6em"
    },
    {
      title: lang.txid,
      dataIndex: "txId",
      key: "txId",
      ellipsis: true
      // width: "10em"
    },
    {
      title: lang.amount,
      dataIndex: "amount",
      key: "amount",
      // ellipsis: true,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.amount - b.amount
      // width: "10em"
    },
    {
      title: lang.status,
      dataIndex: "status",
      key: "status"
      // width: "6em"
    },
    {
      title: lang.time,
      dataIndex: "createdAt",
      key: "createdAt",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    }
  ];

  const [lineChartPeriod, setLineChartPeriod] = useState(0);
  const { onChangeDataPeriod } = props;

  return (
    <div id="dashboard-page">
      <Row gutter={[16, 16]}>
        <StartCard
          backgroundColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(96,173,250,1) 0%, rgba(74,113,225,1) 100%)"
          xs={24}
          md={8}
          icon={
            <Icon
              type="wallet"
              style={{ fontSize: ICON_SIZE, color: ICON_COLOR }}
            />
          }
          number={3124234}
          name={lang.card1_name}
          footer={
            <Typography.Title
              className="card-footer-text"
              style={{ color: ICON_COLOR }}
            >
              {lang.this_week} + 30,400 {lang.currency}
            </Typography.Title>
          }
        />

        <StartCard
          backgroundColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,215,105,1) 0%, rgba(63,176,171,1) 100%)"
          xs={24}
          md={8}
          order={3}
          icon={
            <Icon
              type="arrow-up"
              style={{ fontSize: ICON_SIZE, color: ICON_COLOR }}
            />
          }
          number={3819}
          name={lang.card2_name}
          footer={
            <Typography.Title
              className="card-footer-text"
              style={{ color: ICON_COLOR }}
            >
              {lang.today} + 20,500 {lang.currency}
            </Typography.Title>
          }
        />

        <StartCard
          backgroundColor="linear-gradient(90deg, rgba(247,183,51,1) 100%, rgba(252,74,26,1) 0%, rgba(2,0,36,1) 0%)"
          xs={24}
          md={8}
          order={3}
          icon={
            <Icon
              type="arrow-down"
              style={{ fontSize: ICON_SIZE, color: ICON_COLOR }}
            />
          }
          number={24123}
          name={lang.card3_name}
          footer={
            <Typography.Title
              className="card-footer-text"
              style={{ color: ICON_COLOR }}
            >
              {lang.today} - 12,040 OPAY
            </Typography.Title>
          }
        />
      </Row>

      <Row
        gutter={[16, 16]}
        className="line-chart-row"
        style={{ marginTop: "1em" }}
      >
        <Col
          xs={24}
          md={15}
          // className="line-chart-col"
        >
          <Card
            title={lang.stat}
            extra={
              <Radio.Group
                style={{
                  float: "right",
                  marginBottom: "0.5em",
                  marginRight: "1.6em"
                }}
                size="medium"
                value={lineChartPeriod}
                onChange={e => {
                  const { value } = e.target;
                  setLineChartPeriod(value);
                  onChangeDataPeriod && onChangeDataPeriod(value);
                }}
                defaultValue={0}
              >
                <Radio.Button value={0}>{lang.day}</Radio.Button>
                <Radio.Button value={1}>{lang.week}</Radio.Button>
                <Radio.Button value={2}>{lang.month}</Radio.Button>
                <Radio.Button value={3}>{lang.year}</Radio.Button>
              </Radio.Group>
            }
            className="container"
          >
            <Line
              data={virtualData.data}
              options={{}}
              height="50em"
              width="100%"
            />
          </Card>
        </Col>
        <Col xs={24} md={9}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            className="container"
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
          <Card
            title={lang.transaction_history}
            extra={<a href={"/transactions"}>{lang.more_transactions}</a>}
            className="container"
          >
            <Table
              tableLayout="fixed"
              dataSource={dataSource}
              columns={transactionscolumns}
              scroll={{ y: "50em", x: "50em" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardView;
