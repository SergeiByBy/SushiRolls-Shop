import React from "react";
import ReactDOM from "react-dom/client";
import App from "./sushiRolls/App";
import { BrowserRouter as Router } from "react-router-dom";
import Snowfall from "react-snowfall";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
        <Snowfall />
          <Router>
        <App />
      </Router>
  </React.StrictMode>
);

