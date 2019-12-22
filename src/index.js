import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";

import "./styles.css";
import App from "./App";
import store from "./store";

const Main = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
