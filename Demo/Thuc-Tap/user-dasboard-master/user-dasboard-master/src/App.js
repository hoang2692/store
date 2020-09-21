import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import MainRouter from "./features/router/MainRouter";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
