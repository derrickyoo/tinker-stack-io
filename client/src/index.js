console.log("Data Layer Control (Redux)");
/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

// All React application state is stored as a single object
// Reducers specify HOW the application's state changes in response to actions
// sent to the store.
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
