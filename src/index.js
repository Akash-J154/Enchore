import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UseAuth } from "./Pages/useContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseAuth>
      <App />
    </UseAuth>
  </React.StrictMode>
);
