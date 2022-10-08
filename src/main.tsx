import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import { Store } from "@store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Store.Provider>
      <App />
    </Store.Provider>
  </React.StrictMode>
);
