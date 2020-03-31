import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { searchRobots, requestRobots } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

const logger = createLogger(); //redux middleware
const rootReducer = combineReducers({searchRobots, requestRobots}) 
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
); // we use here searchRobots for our reducer, but in projects with multiple reducers we need to combine them all into on single root reducer and pass this reducer to the createStore() funciton.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
