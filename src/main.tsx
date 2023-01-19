import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { HashRouter } from "react-router-dom";
import "./index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
);
