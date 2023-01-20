import ReactDOM from "react-dom/client";
import Router from "./router";
import { HashRouter } from "react-router-dom";
import "./index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Router />
  </HashRouter>
);
