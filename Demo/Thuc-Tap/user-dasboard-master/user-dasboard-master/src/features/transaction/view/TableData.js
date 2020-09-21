import React from "react";
import PropTypes from "prop-types";
import { Table, Icon, Tooltip } from "antd";
import i18n from "../../../commons/utils/locales/i18n";
import moment from "moment";

import brandIcons from "../../../commons/images/brandIcons";
import formatAmountTransaction from "../../../commons/utils/helpers/formatAmountTransaction";
import renderBeatifulStatus from "../../../commons/utils/helpers/renderBeatifulStatus";

function TableData(props) {
  const { dataTable } = props;
  const lang = {
    transactions: i18n.t("dashboard.transaction.transactions"),
    asset: i18n.t("dashboard.transaction.asset"),
    type: i18n.t("dashboard.transaction.type"),
    txid: i18n.t("dashboard.transaction.txid"),
    amount: i18n.t("dashboard.transaction.amount"),
    amountInOpay: i18n.t("dashboard.transaction.amountInOpay"),
    status: i18n.t("dashboard.transaction.status"),
    time: i18n.t("dashboard.transaction.time"),
    more_transactions: i18n.t("dashboard.transaction.more_transactions"),
    transaction_history: i18n.t("dashboard.transaction.transaction_history")
  };

  const columns = [
    {
      title: lang.type,
      dataIndex: "type",
      key: "type",
      width: "6em",
      render: (type) =>  <Icon type={type == 0 ? "download" : "upload"} className="icon-type" style={{color: type == 0 ? "#e49e12" : "#ea1313cf"}}/> ,
    },
    {
      title: lang.asset,
      dataIndex: "asset",
      key: "asset",
      width: "8em",
      render: (asset) => brandIcons[String(asset).toLocaleLowerCase()],
    },
    {
      title: lang.amount,
      dataIndex: "amountInAsset",
      key: "amountInAsset",
      render: (amount, row) => formatAmountTransaction(row.asset, amount),
      width: "8em",
      // ellipsis: true,
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.amount - b.amount
      // width: "6em" 
    },
    {
      title: lang.amountInOpay,
      dataIndex: "amount",
      key: "amount",
      render: (amount, row) => formatAmountTransaction("opay", amount),
      width: "10em",
      // ellipsis: true,
    },
    {
      title: lang.status,
      dataIndex: "status",
      key: "status",
      width: "8em",
      render: (status) => renderBeatifulStatus(status)
    },
    {
      title: lang.time,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt)=>moment(createdAt).format('DD-MM-YYYY HH:ss:mm')
      // defaultSortOrder: "descend",
      // sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    },
    {
      title: lang.txid,
      dataIndex: "txId",
      key: "txId",
      ellipsis: true,
      render: (txId, row) =>  <Tooltip title={txId ? txId : row.ID}>{txId ? txId : row.ID}</Tooltip>,
      // width: "10em"
    },
  ];

  const mobileColumn = [
    {
      title: lang.type,
      dataIndex: "type",
      key: "type",
      render: (type) =>  <Icon type={type == 0 ? "download" : "upload"} className="icon-type" style={{color: type == 0 ? "#e49e12" : "#ea1313cf"}}/> ,
    },
    {
      title: lang.asset,
      dataIndex: "asset",
      key: "asset",
      // width: "6em",
      render: (asset) => brandIcons[String(asset).toLocaleLowerCase()],
    },
    {
      title: lang.amount,
      dataIndex: "amountInAsset",
      key: "amountInAsset",
      render: (amount, row) => formatAmountTransaction(row.asset, amount)
      // ellipsis: true,
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.amount - b.amount
      // width: "10em"
    },
    {
      title: lang.amountInOpay,
      dataIndex: "amount",
      key: "amount",
      render: (amount, row) => formatAmountTransaction("opay", amount),
      width: "6em",
      // ellipsis: true,
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.amount - b.amount
      // width: "6em" 
    },
    {
      title: lang.status,
      dataIndex: "status",
      key: "status",
      // width: "6em"
      render: (status) => renderBeatifulStatus(status)

    },
    {
      title: lang.time,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt)=>moment(createdAt).format('DD-MM-YYYY HH:ss:mm')
      // defaultSortOrder: "descend",
      // sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    },
    {
      title: lang.txid,
      dataIndex: "txId",
      key: "txId",
      // ellipsis: true,
      render: (txId, row) =>  <Tooltip title={txId ? txId : row.ID}>{txId ? txId : row.ID}</Tooltip>,
      // width: "10em"
    },
  ];

  const onChangePage = (page, pageSize) => {
    props.onChangePage && props.onChangePage(page, pageSize);
  };

  return (
    <>
      <Table
        className="web-table"
        dataSource={dataTable}
        columns={columns}
        scroll={{ x: true }}
        pagination={{
          total: props.total,
          pageSize: 10,
          onChange: onChangePage
        }}
        loading={props.loading}
      />
      <Table
        className="mobile-table"
        dataSource={dataTable}
        columns={mobileColumn}
        scroll={{ x: true }}
        pagination={{
          total: props.total,
          pageSize: 10,
          onChange: onChangePage
        }}
        loading={props.loading}
      />
    </>
  );
}

TableData.propTypes = {
  dataTable: PropTypes.array.isRequired,
  setDataEdit: PropTypes.func.isRequired,
  setVisibleEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,

  total: PropTypes.number,
  onChangePage: PropTypes.func
};

export default TableData;
