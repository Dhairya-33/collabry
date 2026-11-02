import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRoutes from "./app/AppRoutes";
import store from "./store/store.js";

import "./styles/app.css";
import { MotionConfig } from "framer-motion";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
