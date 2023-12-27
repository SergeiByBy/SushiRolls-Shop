import React from "react";
import ReactDOM from "react-dom/client";
import App from "./sushiRollsFinalRedux/App";
import { BrowserRouter as Router } from "react-router-dom";
import Snowfall from "react-snowfall";
import { Provider } from "react-redux";
import store from "./sushiRollsFinalRedux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
           <Provider store={store}>
        <Snowfall />
          <Router>
        <App />
      </Router>
      </Provider>
  </React.StrictMode>
);

