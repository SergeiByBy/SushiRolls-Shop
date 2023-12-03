import React from "react";
import ReactDOM from "react-dom/client";
import App from "./sushiRolls/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
);

// import ReactDOM from "react-dom";
// import App from "./redux/App";
// // import {createStore} from "redux";
// import { Provider } from 'react-redux'
// import {store} from './redux/store'

// ReactDOM.render(
//  <Provider store={store}>
//     <App />
//  </Provider>,
//  document.getElementById('root')
// );
