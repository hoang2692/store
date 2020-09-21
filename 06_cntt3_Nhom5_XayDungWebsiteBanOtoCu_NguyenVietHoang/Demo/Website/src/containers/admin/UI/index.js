import * as React from "react";
import Header from "./Header/Header";
import Product from "./product";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
      </div>
    );
  }
}

export default AdminHome;
