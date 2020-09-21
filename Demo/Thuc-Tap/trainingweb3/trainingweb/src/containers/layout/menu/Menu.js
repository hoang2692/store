import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Modules } from "../../../helpers/Constants";

function ModuleTable(props) {
  const data = props.data;
  return (
    <div className="topnav" alt="menubar" id="navba">
      {SetModuleTable(data)}
    </div>
  );
}

function SetModuleTable(data, parentId = 0) {
  const items =
    parentId > 0
      ? data.filter((e) => {
          return e.parentId === parentId && e.id !== e.parentId;
        })
      : data.filter((e) => {
          return e.id === e.parentId;
        });
  if (items) {
    return items.map((el) => {
      const child =
        data.filter((e) => {
          return e.parentId === el.id && e.id !== e.parentId;
        }).length > 0;
      return child ? (
        <div key={el.id} className="dropdwn">
          <button className="dropbtn">{el.title}</button>
          <div className="dropdwn-content">{SetModuleTable(data, el.id)}</div>
        </div>
      ) : (
        <Link key={el.id} to={"/" + el.moduleName + el.link}>
          {el.title}
        </Link>
      );
    });
  }
}

export default class Menu extends Component {
  state = {};

  render() {
    return (
      <div style={{ position: "sticky", top: "0", zIndex: "3" }}>
        <ModuleTable data={Modules} />
      </div>
    );
  }
}
