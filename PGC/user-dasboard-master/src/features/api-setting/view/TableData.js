import React from "react";
import PropTypes from "prop-types";
import { Table, Tooltip, Button } from "antd";

function TableData(props) {
  const { dataTable, setDataEdit, setVisibleEdit, onRemove } = props;
  const column = [
    {
      title: "App Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Api Key",
      dataIndex: "apiKey",
      key: "apiKey",
      render: value => {
        if (value.length > 25)
          return <Tooltip title={value}>{value.slice(0, 25)}...</Tooltip>;
        return value;
      }
    },
    {
      title: "Webhook URL",
      dataIndex: "webhookURL",
      key: "url"
    },
    {
      title: "Actions",
      key: "actions",
      render: row => (
        <div className="btn-group">
          <Tooltip title="Edit">
            <Button
              icon="edit"
              onClick={() => {
                setDataEdit(row);
                setVisibleEdit(true);
              }}
            />
          </Tooltip>
          <Tooltip title="Remove">
            <Button icon="delete" onClick={() => onRemove(row)} />
          </Tooltip>
        </div>
      )
    }
  ];

  const mobileColumn = [
    {
      title: "App Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Actions",
      key: "actions",
      render: row => (
        <div className="btn-group">
          <Tooltip title="Edit">
            <Button
              icon="edit"
              onClick={() => {
                setDataEdit(row);
                setVisibleEdit(true);
              }}
            />
          </Tooltip>
          <Tooltip title="Remove">
            <Button icon="delete" onClick={() => onRemove(row)} />
          </Tooltip>
        </div>
      )
    }
  ];

  const onChangePage = (page, pageSize) => {
    props.onChangePage && props.onChangePage(page, pageSize);
  };

  return (
    <>
      <Table
        className="web-table"
        dataSource={dataTable}
        columns={column}
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
