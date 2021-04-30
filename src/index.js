import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./TodoComponent";
import reportWebVitals from "./reportWebVitals";
import App2 from "./ApiComponent";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2></App2>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
