import React from "react";
import ReactDOM from "react-dom/client";
import App from "./sushiRolls/App";
import { BrowserRouter as Router } from "react-router-dom";
import Snowfall from "react-snowfall";
import { Provider } from "react-redux";
import store from "./sushiRolls/store";
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

