import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = true;
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
